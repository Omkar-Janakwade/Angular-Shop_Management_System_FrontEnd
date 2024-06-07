import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin, AdminService } from '../admin.service';


@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  
message:string=" ";
admin:Admin=new Admin('','');


constructor(private adminservice:AdminService,private router:Router){}
checkadmin(){
  this.adminservice.loginadmin(this.admin).subscribe(islog=>{if(islog){
    
    this.router.navigate(['adminindex'])
    localStorage.setItem("name",this.admin.name)
  }
else{
  this.message="please enter valid detail"
  this.router.navigate(['adminlogin'])
}})
}

}
