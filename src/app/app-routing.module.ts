import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';


const routes: Routes = [
  {
    path:'login' , component: LoginComponent
  },
  {
    path:'signup' , component: SignupComponent
  },
  {
    path:'home' , component:HomeComponent
  },
  {
    path:'teacher', component:TeacherComponent
  },
  {
    path:'student' , component:StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
