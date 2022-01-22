import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CurdService } from '../services/curd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private curdService:CurdService,private router:Router) {
    this.curdService.getStudents().subscribe((res:any) => {
      res.forEach((ele:any) => {
        this.arr.push(ele.data())
        console.log(ele.data())
      });
      this.dataSource = new MatTableDataSource(this.arr)
     console.log(this.arr)
    })

    this.curdService.getEmployees().subscribe((res:any) => {
      res.forEach((element:any) => {
        this.arr2.push(element.data())
        console.log(element.data())
      });
      this.mydata = new MatTableDataSource(this.arr2);
      console.log(this.arr2)
    })

   }

  ngOnInit(): void {

  }
  arr:any = [
   
  ]
  arr2:any = [

  ]

  displayedColumns: string[] = ['Sname', 'Sage', 'Sclass', 'fees'];
  dataSource = this.arr;

  displayedColumns2: string[] = ['Ename', 'Eage', 'Ebranch', 'salary'];
  mydata = this.arr2;
  
  navigateToStudent(){
    this.router.navigate(['student'])
  }

  navigateToEmployee(){
    this.router.navigate(['employee'])
  }
}
