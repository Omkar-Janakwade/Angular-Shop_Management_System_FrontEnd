import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { CustomerloginComponent } from '../customerlogin/customerlogin.component';
import { GetConnection, GetconnectionService } from '../getconnection.service';
import { DailyTransaction, TransactionService } from '../transaction.service';

@Component({
  selector: 'app-customerindex',
  standalone: true,
  imports: [CustomerloginComponent,FormsModule,CommonModule],
  templateUrl: './customerindex.component.html',
  styleUrl: './customerindex.component.css'
})
export class CustomerindexComponent implements OnInit {
  
 
  message:any;
  transactionarr:DailyTransaction[]=[];

 getconnection:GetConnection=new GetConnection('','','',0,'',0,'','');
constructor(private getconnectionservice:GetconnectionService,private router:Router,private transactionservice:TransactionService){ }
  ngOnInit(): void {
   
    this.message=sessionStorage.getItem("message")
    if(this.message!==null){
      
      this.getcustransaction();
     this.calculateTotalQuantity()
     
     
    this.getconnectionservice.getconnection(this.message).subscribe(getcon=>this.getconnection=getcon);
  this.getconnectiondata();
  }else{
    this.router.navigate(['/customerlogin'])
  }

}
getconnectiondata(){
  this.getconnectionservice.getconnection(this.message).subscribe(getcon=>this.getconnection=getcon);

}
updatepassword(){

  sessionStorage.setItem("fullname",this.message);
  this.router.navigate(['updateconnection'])
}
getcustransaction(){
  this.transactionservice.getcustransaction(this.message).subscribe(dailytransationarr=> this.transactionarr=dailytransationarr)
}
totalQuantity: number = 0;
  calculateTotalQuantity() {
    this.totalQuantity = this.transactionarr.reduce((total, item) => {
      // Check if the quantity is a valid string representing an integer
      const isNumeric = /^\d+$/.test(item.quantity);
  
      if (isNumeric) {
        return total + parseInt(item.quantity, 10);
      } else {
       alert(`Invalid quantity for item with fullname ${item.fullname}: ${item.quantity}`);
        return total; // Ignore invalid quantities
      }
    }, 0);
  }


logout(){
sessionStorage.removeItem("message")
  this.router.navigate(['home'])
}


}
