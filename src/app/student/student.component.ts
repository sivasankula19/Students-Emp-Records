import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { COLLECTIONS } from '../Enums/collections.enum';
import { CurdService } from '../services/curd.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  studentForm!: FormGroup;
  constructor(private router:Router,private curdService:CurdService) { }

  ngOnInit(): void {
    this.studentForm = new FormGroup({
      Sname:new FormControl('',[Validators.required]),
      Sage: new FormControl('', [Validators.required]),
      Sclass:new FormControl('',[Validators.required]),
      fees: new FormControl('',[Validators.required])
    })
  }

  onSubmit(){
    this.curdService.setRecord(COLLECTIONS.STUDENTS, this.studentForm.value).then((res:any) =>{
      alert('Student added successfully')
      this.router.navigate(['home'])
    }).catch((err:any)=>{
      console.log(err)
    })
  }

  navigateToHome(){
    this.router.navigate(['home'])
  }
}
