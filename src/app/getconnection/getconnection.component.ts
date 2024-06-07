import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GetConnection, GetconnectionService } from '../getconnection.service';

@Component({
  selector: 'app-getconnection',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './getconnection.component.html',
  styleUrl: './getconnection.component.css'
})
export class GetconnectionComponent {
  message:string="";
  issubmit:boolean=false;
  getconnection:GetConnection=new GetConnection('','','',0,'',0,'','')

  constructor(private getconnectionservice:GetconnectionService,private router:Router){}

  GetConnectiondata(){
    
     this.getconnectionservice.GetConnectiondata(this.getconnection).subscribe(sub=>{
      
      if(sub==true){
        this.router.navigate(['customerlogin']);
        sessionStorage.setItem("succmessage","Connection Succesfull. Please Login")
        
      }else{
        this.message="Name Already Exist"
      }
     });

  }
  getconne(){
this.getconnectionservice.getconnection(this.getconnection.fullname).subscribe(getc=>this.getconnection=getc);
  }
  deleteconnection(){
    this.getconnectionservice.deleteconnection(this.getconnection.fullname).subscribe(deleted=>{
      if(deleted){
        this.message="data deleted succesfully"
      }else{
        this.message="data does not exist"
      }

    })

  }
}
