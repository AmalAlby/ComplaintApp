import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  constructor(private api:ApiService,private route:Router){}
  username=""
  password=""
  
  readValues = ()=>{
    let data:any = {
      "username":this.username,
      "password":this.password
    }
    this.api.userLogin(data).subscribe(
      (response:any) =>{
        if(response.status == "success"){
          localStorage.setItem("userInfo",response.userId)
          this.route.navigate(["/userProfile"])
        }else{
          alert("Invalid Credentials")
        }
      }
    )
  }

}
