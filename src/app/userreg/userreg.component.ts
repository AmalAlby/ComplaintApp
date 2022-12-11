import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userreg',
  templateUrl: './userreg.component.html',
  styleUrls: ['./userreg.component.css']
})
export class UserregComponent {

  constructor(private api:ApiService, private route:Router){}
  name = ""
  address = ""
  email = ""
  phone = ""
  username = ""
  password = ""

  readValues = () => {
    let data = {
      "name": this.name,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "username": this.username,
      "password": this.password
    }
    this.api.userReg(data).subscribe(
      (response:any)=>{
        if(response.status == "success"){
          console.log(response)
          alert("User Registration Successfull")
        }else{
          alert("User Registration Failed")
        }
      }
    )
  }

}
