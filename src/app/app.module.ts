import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationLoginComponent } from './administration-login/administration-login.component';
import { RouterModule, Routes } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { ViewAllbooksComponent } from './view-allbooks/view-allbooks.component';
import { BooksSearchComponent } from './books-search/books-search.component';
import { BooksDeleteComponent } from './books-delete/books-delete.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
const myRoute:Routes=[
  {
    path:"",
    component:AdministrationLoginComponent
  },
  {
    path:"signup",
    component:UserSignupComponent
  },
  {
    path:"login",
    component:UserLoginComponent
  },
  {
    path:"entry",
    component:BookEntryComponent
  },
  {
    path:"view",
    component:ViewAllbooksComponent
  },
  {
    path:"search",
    component:BooksSearchComponent
  },
  {
    path:"delete",
    component:BooksDeleteComponent
  },
  {
    path:"edit",
    component:BooksEditComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdministrationLoginComponent,
    UserSignupComponent,
    UserLoginComponent,
    BookEntryComponent,
    ViewAllbooksComponent,
    BooksSearchComponent,
    BooksDeleteComponent,
    BooksEditComponent
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
