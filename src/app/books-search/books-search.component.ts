import { Component } from '@angular/core';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.css']
})
export class BooksSearchComponent {
 titile=""

 readValues=()=>
 {
  let data:any={"titile":this.titile}
  console.log(data)
 }
}
