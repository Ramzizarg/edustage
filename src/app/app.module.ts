<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { CourseComponent } from './course/course.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component'; // Import HomeComponent directly

import { AppRoutingModule } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent,
    RegisterComponent,
    ForgetPasswordComponent
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {StudentComponent} from "./student/student.component";
import {TeacherComponent} from "./teacher/teacher.component";
import {AppRoutingModule} from "./app.routes";
import {RouterModule} from "@angular/router";
import {CourseComponent} from "./course/course.component";


@NgModule({
  declarations: [
    LoginComponent,
    AppComponent,
    StudentComponent,
    TeacherComponent,
    CourseComponent

>>>>>>> 1c30bd43 (new)
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HomeComponent,
=======
    ReactiveFormsModule

>>>>>>> 1c30bd43 (new)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
