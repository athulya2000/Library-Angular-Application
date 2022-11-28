import { Component } from '@angular/core';

@Component({
  selector: 'app-books-issue',
  templateUrl: './books-issue.component.html',
  styleUrls: ['./books-issue.component.css']
})
export class BooksIssueComponent {
 name=""
 titile=""
 DateOfIssue=""
 membership=""

 readValues=()=>
 {
  let data:any={"name":this.name,"titile":this.titile,"DateOfIssu":this.DateOfIssue,"membership":this.membership}
  console.log(data)
 }
}
