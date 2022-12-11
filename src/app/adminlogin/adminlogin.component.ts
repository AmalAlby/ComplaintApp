import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  constructor(private route:Router){
    localStorage.removeItem("userInfo");
  }
  username = ""
  password = ""
  
  readValues = ()=>{
    if(this.username=="admin"&&this.password=="12345"){
      this.route.navigate(["/dashboard"])
    }else{
      alert("Invalid Credentials");
    }

  }

}
