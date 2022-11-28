import { Component } from '@angular/core';

@Component({
  selector: 'app-books-delete',
  templateUrl: './books-delete.component.html',
  styleUrls: ['./books-delete.component.css']
})
export class BooksDeleteComponent {
 titile=""

 readValues=()=>
 {
  let data:any={
    "titile":this.titile
  }
  console.log(data)
 }
}
