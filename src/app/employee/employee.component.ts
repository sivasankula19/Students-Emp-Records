import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CurdService } from '../services/curd.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  constructor(private router:Router,private curdService:CurdService) { }


  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      Ename:new FormControl('',[Validators.required]),
      Eage: new FormControl('', [Validators.required]),
      Ebranch:new FormControl('',[Validators.required]),
      salary: new FormControl('',[Validators.required])
    })
  }


  onSubmit(){
    this.curdService.setEmployee(this.employeeForm.value).then((res:any) => {
      alert('Employee added Successfully')
      this.router.navigate(['home'])
    }).catch((err:any) => {
      console.log(err)
    })
    console.log(this.employeeForm.value)
    this.employeeForm.reset()
  }
  navigateToHome(){
    this.router.navigate(['home'])
  }

}
