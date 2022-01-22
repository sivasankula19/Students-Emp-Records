import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private angularFirestore : AngularFirestore) { }
  getStudents(){
    return this.angularFirestore.collection('student').get()
  }
  getEmployees(){
    return this.angularFirestore.collection('employee').get()
  }

  setStudent(data:any){
    return this.angularFirestore.collection('student').add(data)
  }

  setEmployee(data:any){
    return this.angularFirestore.collection('employee').add(data)
  }

}
