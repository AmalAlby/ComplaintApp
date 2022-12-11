import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashComponent } from './dash/dash.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserregComponent } from './userreg/userreg.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const myRoutes:Routes = [
  {
    path:"",
    component:AdminloginComponent
  },
  {
    path:"userlogin",
    component:UserloginComponent
  },
  {
    path:"userReg",
    component:UserregComponent
  },
  {
    path:"dashboard",
    component:DashComponent
  },
  {
    path:"userProfile",
    component:UserprofileComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    DashComponent,
    UserloginComponent,
    UserprofileComponent,
    UserregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
