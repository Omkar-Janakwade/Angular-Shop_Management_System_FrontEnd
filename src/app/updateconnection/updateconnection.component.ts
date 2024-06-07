import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GetConnection, GetconnectionService } from '../getconnection.service';

@Component({
  selector: 'app-updateconnection',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './updateconnection.component.html',
  styleUrl: './updateconnection.component.css'
})
export class UpdateconnectionComponent {
  fullname:any="";
  password:string="";
  newpassword:string="";
  conformnewpassword:string="";

  
  ngOnInit(){
   this.fullname= sessionStorage.getItem("fullname");
   if(this.fullname!==null)
    this.getsingleconnection();
  else
    this.router.navigate(['customerlogin'])
  }
  getconnection:GetConnection=new GetConnection('','','',0,'',0,'','');
constructor(private getconnectionservice:GetconnectionService,private router:Router){ }
getsingleconnection(){
  this.getconnectionservice.getconnection(this.fullname).subscribe(conn=>this.getconnection=conn);
}
updatepassword(){
  console.log(this.fullname+"//"+this.password)
if( this.newpassword===this.conformnewpassword){
this.getconnectionservice.updatepassword(this.fullname,this.newpassword).subscribe(isupdate=>{
  if(isupdate){
    console.log(isupdate)
    alert("password updated successfull")
    sessionStorage.setItem("message",this.fullname);
    this.router.navigate(['customerindex'])
  }else{
    alert("some thing wrong on server")
  }
});
}else{
  alert("please enter same password");
}
}
gotoaccount(){
  this.router.navigate(['customerlogin'])
}
}
