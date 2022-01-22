import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path:'home',
    loadChildren: () => import ('../app/home/home.module').then(m => m.HomeModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'student',
    loadChildren: () => import ('../app/student/student.module').then(m => m.StudentModule)
  },{
    path:'employee',
    loadChildren: () => import ('../app/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path:'**',
    loadChildren: () => import ('../app/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
