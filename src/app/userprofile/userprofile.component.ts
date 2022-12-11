import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  constructor(private api:ApiService){
    let data:any = {
      "id":localStorage.getItem("userInfo")
    }
    api.getUserById(data).subscribe(
      (response:any)=>{
        this.userData = response
      }
    )
  }
  userData:any = []

}
