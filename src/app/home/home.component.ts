import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { COLLECTIONS } from '../Enums/collections.enum';
import { CurdService } from '../services/curd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studentForm!: FormGroup;
  employeeForm!: FormGroup;
  isStudentEdit:boolean = false
  studentRowId:string = ''
  isEmployeeEdit:boolean = false
  employeeRowId:string = ''
  arr:any = [
   
  ]
  arr2:any = [

  ]
  displayedColumns: string[] = ['Sname', 'Sage', 'Sclass', 'fees','edit','delete'];
  dataSource = this.arr;

  displayedColumns2: string[] = ['Ename', 'Eage', 'Ebranch', 'salary','edit', 'delete'];
  mydata = this.arr2;
  
  constructor(private curdService:CurdService,private router:Router) {
    this.getStudentValues();
    this.getEmployeeValues();
   }

   ngOnInit(): void {
    this.studentForm = new FormGroup({
      Sname:new FormControl('',[Validators.required]),
      Sage: new FormControl('', [Validators.required]),
      Sclass:new FormControl('',[Validators.required]),
      fees: new FormControl('',[Validators.required])
    })
    this.employeeForm = new FormGroup({
      Ename:new FormControl('',[Validators.required]),
      Eage: new FormControl('', [Validators.required]),
      Ebranch:new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required])
    })
  }

  getStudentValues(){
    this.arr = []
    this.curdService.getAllRecords(COLLECTIONS.STUDENTS).subscribe((res:any) => {
      res.forEach((ele:any) => {
        let myobj = {id:ele.ref.id,...ele.data()}
        this.arr.push(myobj)
      });
      console.log(this.arr)
      this.dataSource = new MatTableDataSource(this.arr)
    })
  }
  getEmployeeValues(){
    this.arr2 = []
    this.curdService.getAllRecords(COLLECTIONS.EMPLOYEES).subscribe((res:any) => {
      res.forEach((element:any) => {
        let myobj = {id:element.ref.id,...element.data()}
        this.arr2.push(myobj)
      });
      console.log(this.arr2)
      this.mydata = new MatTableDataSource(this.arr2);
    })
  }

  cancleEdit(){
    this.isStudentEdit = false
    this.isEmployeeEdit = false
  }
  EditStudentRowWithId(element:any){
    this.isStudentEdit = true;
    this.studentRowId = element.id
    this.studentForm.setValue({
      Sname:element.Sname,
      Sage:element.Sage,
      Sclass:element.Sclass,
      fees:element.fees
    })
  }
  
  onSubmitStudent(){
    this.curdService.updateRecord(COLLECTIONS.STUDENTS, this.studentRowId, this.studentForm.value).then((res:any) => {
      this.isStudentEdit = false;
      this.studentRowId = ''
      this.getStudentValues()
    }).catch((err:any) => {
      console.log(err)
    })
  }

  EditEmployeeRowWithId(element:any){
    this.isEmployeeEdit = true;
    this.employeeRowId = element.id;
    this.employeeForm.setValue({
      Ename: element.Ename,
      Ebranch: element.Ebranch,
      Eage: element.Eage,
      salary: element.salary
    })
  }

  onSubmitEmployee(){
    this.curdService.updateRecord(COLLECTIONS.EMPLOYEES, this.employeeRowId, this.employeeForm.value).then((res) => {
      this.isEmployeeEdit = false;
      this.employeeRowId = '',
      this.getEmployeeValues()
    }).catch((err:any) => {
      console.log(err)
    })
  }

  deleteStudent(id:any){
    this.curdService.deleteRecord(COLLECTIONS.STUDENTS, id).then((res:any) => {
      this.getStudentValues();
      alert('Deleted successfully')
    }).catch((err:any) => {
      console.log(err)
    })
  }
  
  deleteEmployee(id:any){
    this.curdService.deleteRecord(COLLECTIONS.EMPLOYEES, id).then((res:any) => {
      this.getEmployeeValues()
      alert('Deleted successfully')
    }).catch((err:any) =>{
      console.log(err)
    })
  }
 

  navigateToStudent(){
    this.router.navigate(['student'])
  }

  navigateToEmployee(){
    this.router.navigate(['employee'])
  }

}
