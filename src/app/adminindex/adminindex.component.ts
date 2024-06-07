import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { blob } from 'stream/consumers';
import { Admin, AdminService } from '../admin.service';
import { BookOrder, BookorderService } from '../bookorder.service';

@Component({
  selector: 'app-adminindex',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './adminindex.component.html',
  styleUrl: './adminindex.component.css'
})
export class AdminindexComponent 
{
  name:any;
  message:string="";
  admin:Admin=new Admin('','')
  adminarr:Admin[]=[];
 
  
  constructor(private router:Router,private adminservice:AdminService){ }
  ngOnInit(){
    this.name=localStorage.getItem("name")
   
    if(this.name==null){
     
      this.router.navigate(['adminlogin'])
    }
  }

showallorder(){
this.router.navigate(['adminshoworder'])
}
showallconnection(){
  this.router.navigate(['admonshowconnection'])
}
addtransaction(){
  this.router.navigate(['addtransaction'])
}
showtransaction(){
  this.router.navigate(['admincustransaction'])
}
addadmin(){
  this.adminservice.addadmin(this.admin).subscribe(issave=>{
    if(issave){

      this.message="Admin added successfully"
      this.admin=new Admin('','')
      window.location.reload();
    }
    else{
      this.message="please check once your detail"
    }
  })
}
alladmin(){
  this.adminservice.alladmin().subscribe(adminarr=>this.adminarr=adminarr);
}


logout(){
  localStorage.removeItem("name")
  localStorage.clear();
  this.router.navigate(['home'])
}
}
