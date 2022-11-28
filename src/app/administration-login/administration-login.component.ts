import { Component } from '@angular/core';

@Component({
  selector: 'app-administration-login',
  templateUrl: './administration-login.component.html',
  styleUrls: ['./administration-login.component.css']
})
export class AdministrationLoginComponent {
 username=""
 password=""


readValues=()=>
{
  let data:any={"username":this.username,"password":this.password}
  console.log(data)

  }
}

