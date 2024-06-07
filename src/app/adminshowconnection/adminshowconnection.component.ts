import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GetConnection, GetconnectionService } from '../getconnection.service';

@Component({
  selector: 'app-adminshowconnection',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './adminshowconnection.component.html',
  styleUrl: './adminshowconnection.component.css'
})
export class AdminshowconnectionComponent implements OnInit {
  message:string="";
  isclick:boolean=false;
  isupdateclick:boolean=true;

getConnectionarr:GetConnection[]=[]
getconnection :GetConnection=new GetConnection('','','',0,'',0,'','');
name:any;
constructor(private getconnectionservice:GetconnectionService,private router:Router){ }
  ngOnInit(): void {
    this.name=localStorage.getItem("name")
   
    if(this.name==null){
      this.router.navigate(['adminlogin'])
    }
    this.getall();
  }
  gotoadminhome(){
    this.router.navigate(['adminindex'])
  }

deleteconnection(fullname:string){
    
  this.getconnectionservice.deleteconnection(fullname).subscribe(isdelete=>{
    if(isdelete){
      alert("Reord of "+ fullname +" Deleted Succesfull")
      this.router.navigate(['/admonshowconnection']);
      window.location.reload();
    }
    else
    this.message="something wrong on a server"
  });
  this.getall();

}
getall(){
  this.getconnectionservice.getAllConnection().subscribe(connectionarr=>this.getConnectionarr=connectionarr)
}
addconnection(){
  this.router.navigate(['/getconnection'])
}
updateconnectionclick(fullname:string){
  
  this.isclick=true;
  this.isupdateclick=false;
  this.getconn(fullname)
  
  
 // this.router.navigate(['/updateorder'])


}
getconn(fullname:string){
  this.getconnectionservice.getconnection(fullname).subscribe(connection=>this.getconnection=connection)

}
updateconnection(){
 this.getconnectionservice.updateconnection(this.getconnection).subscribe();
 this.isclick=false;
 this.isupdateclick=true;
  //this.getall();
  this.router.navigate(['/admonshowconnection'])
  alert("record of "+this.getconnection.fullname+" updated succesfully")
  window.location.reload();
  
 
}




}
