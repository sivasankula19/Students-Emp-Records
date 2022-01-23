import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurdService {

  constructor(private angularFirestore : AngularFirestore) { }

  // getStudents(){
  //   return this.angularFirestore.collection('student').get() as Observable<any>
  // }
  // getEmployees(){
  //   return this.angularFirestore.collection('employee').get() as Observable<any>
  // }



  /** this is the actuall method to get the data from the firestore and it return an Observable
   * we have collection named as student and employee pass the value to function and we can get the data 
   * 
   * @param collectionName the name of the collection we wish to get
   * @returns its return a observable , we can simple subscribe it and render the database data 
   */
  getAllRecords(collectionName:any){
    return this.angularFirestore.collection(collectionName).get() as Observable<any>
  }

  // setStudent(data:any){
  //   return this.angularFirestore.collection('student').add(data)
  // }
  // setEmployee(data:any){
  //   return this.angularFirestore.collection('employee').add(data)
  // }



  /**This is to set a record in the database it returns a promise
   * 
   * @param collectionName name of the collection in which we are storing
   * @param data the actual data which is in the formate of json 
   * @returns  returns a promise
   */
  setRecord(collectionName:any,data:any){
    return this.angularFirestore.collection(collectionName).add(data)
  }




  // updateStudent(id:any,data:any){
  //   return this.angularFirestore.collection('student').doc(id).update(data)
  // }
  // updateEmployee(id:any,data:any){
  //   return this.angularFirestore.collection('employee').doc(id).update(data)
  // }


  /**It is to update the existing record in the firestore and its actually takes 3 param  and returns a promise
   * collection name the name of the collection where we are updating record
   * id is the id of the record which is need to be update
   * data is the updated data need to set in firestore
   * @param collectionName name of the colletion on firestore
   * @param id id of the doc which is need to update
   * @param data the updated data
   * @returns a promise 
   */
  updateRecord(collectionName:any, id:any, data:any){
    return this.angularFirestore.collection(collectionName).doc(id).update(data)
  }


  // deleteStudent(id:any){
  //   return this.angularFirestore.collection('student').doc(id).delete()
  // }
  // deleteEmplyee(id:any){
  //   return this.angularFirestore.collection('employee').doc(id).delete()
  // }


  /** This method is to delete a record from the collection using doc id as reference
   * it takes 2 params and returns a promise
   * 
   * @param collectionName name of the collection in firestore in which we are deleting the record
   * @param id id of the doc in that collection
   * @returns a promise
   */
  deleteRecord(collectionName:any, id:any){
    return this.angularFirestore.collection(collectionName).doc(id).delete()
  }


}
