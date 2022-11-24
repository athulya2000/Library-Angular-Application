import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationLoginComponent } from './administration-login/administration-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdministrationLoginComponent
  },
  {
    path:"signup",
    component:UserSignupComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdministrationLoginComponent,
    UserSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
