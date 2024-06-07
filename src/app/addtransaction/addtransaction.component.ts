import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { DailyTransaction, TransactionService } from '../transaction.service';

@Component({
  selector: 'app-addtransaction',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './addtransaction.component.html',
  styleUrl: './addtransaction.component.css'
})
export class AddtransactionComponent {
  names: any[] = [];
  dailytransaction:DailyTransaction=new DailyTransaction('','','','','');
  selectesname:string="";
  name:any;
  constructor(private Transactionservice:TransactionService,private router:Router){ }

ngOnInit(){
  this.name=sessionStorage.getItem("name")
  this.name=localStorage.getItem("name")
    if(this.name==null){
      this.router.navigate(['adminlogin'])
    }
  this.allname();
}
gotoadminhome(){
  this.router.navigate(['adminindex'])
}
resetform(){
  
  this.dailytransaction=new DailyTransaction('','','','','');
}
  allname(){
    this.Transactionservice.allname().subscribe(namesarr=>this.names=namesarr);
    
  }
  addtransaction(){
   this.Transactionservice.savetransaction(this.dailytransaction).subscribe(issave=>{
    if(issave){
       alert( "addeed successfull")
       this.router.navigate(['adminindex'])
    }
    else
     alert( "check detail")
   });
  }
}
