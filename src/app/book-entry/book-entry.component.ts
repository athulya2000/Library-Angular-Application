import { Component } from '@angular/core';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  titie=""
  image=""
  author=""
  price=""
  Language=""
  Description=""
  Publisher=""
  Distributor=""
  ReleasedYear=""

  readValues=()=>
  {
    let books:any= {
      "titie":this.titie,
      "image":this.image,
      "author":this.author,
      "price":this.price,
      "Language":this.Language,
      "Description":this.Description,
      " Publisher":this.Publisher,
      " Distributor":this.Distributor,
      " ReleasedYear":this.ReleasedYear
    }
    console.log(books)
  }

}
