import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { CustomerindexComponent } from '../customerindex/customerindex.component';

import { GetConnection, GetconnectionService } from '../getconnection.service';

@Component({
  selector: 'app-customerlogin',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,CustomerindexComponent],
  templateUrl: './customerlogin.component.html',
  styleUrl: './customerlogin.component.css'
})
export class CustomerloginComponent implements OnInit {
 message:string="";
  message2:any="";
 
  getconnection:GetConnection=new GetConnection('','','',0,'',0,'','')
  constructor(private getconnectionservice:GetconnectionService,private router:Router){ }
  ngOnInit(): void {
    this.message2= sessionStorage.getItem("succmessage")
  }
logincustomer(){
  if(this.getconnection.fullname===''||null||this.getconnection.password===''||null){
    this.message="please enter detail"
  }
 
this.getconnectionservice.logincustomer(this.getconnection.fullname,this.getconnection.password).subscribe(loginstatus=>{
  if(loginstatus){
   
    this.router.navigate(['customerindex']);
    sessionStorage.setItem("message",this.getconnection.fullname);
  }else{
    this.message="Please Enter Valid Username And Password"
  }
})
}
}
