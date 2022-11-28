import { Component } from '@angular/core';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent {
 titile=""  

 readValues=()=>
 {
  let data:any={"titile":this.titile}
  console.log(data)
 }
 
}
