import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
<<<<<<< HEAD
import { AuthGuard } from "./login/AuthGuard";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from "./home/home.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home page
  { path: 'home', component: HomeComponent },          // Home route
=======
import {AuthGuard} from "./login/AuthGuard";

const routes: Routes = [
  {path:'', redirectTo :'', pathMatch:'full'},
>>>>>>> 1c30bd43 (new)
  { path: 'login', component: LoginComponent },
  { path: 'student/:userId', component: StudentComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_STUDENT'] } },
  { path: 'teacher/:userId', component: TeacherComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TEACHER'] } },
  { path: 'teacher/:userId/create_course', component: CourseComponent, canActivate: [AuthGuard], data: { roles: ['ROLE_TEACHER'] } },
<<<<<<< HEAD
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: '**', redirectTo: 'home' },
=======

>>>>>>> 1c30bd43 (new)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
