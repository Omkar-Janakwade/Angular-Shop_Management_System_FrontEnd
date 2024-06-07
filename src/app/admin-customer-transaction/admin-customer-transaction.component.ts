import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DailyTransaction, TransactionService } from '../transaction.service';

@Component({
  selector: 'app-admin-customer-transaction',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './admin-customer-transaction.component.html',
  styleUrl: './admin-customer-transaction.component.css'
})
export class AdminCustomerTransactionComponent {
  names: any[] = [];
  selectesname:string="";
  name:any;
transactionarr:DailyTransaction[]=[];
dailytransaction:DailyTransaction=new DailyTransaction('','','','','');

constructor(private transactionservice:TransactionService,private router:Router){}

ngOnInit(){
  this.name=sessionStorage.getItem("name")
  this.name=localStorage.getItem("name")
    if(this.name==null){
      this.router.navigate(['adminlogin'])
    }
  this.allname();

}


showtransaction(){
  this.transactionservice.getcustransaction(this.selectesname).subscribe(cusarr=>this.transactionarr=cusarr)


}
adminindex(){
  this.router.navigate(['adminindex'])
}
allname(){
  this.transactionservice.allname().subscribe(namesarr=>this.names=namesarr);
 
}
deletecusdata(){
  this.transactionservice.deletcusdata().subscribe(isdelete=>{
    if(isdelete){
      alert("data deleted succesfully")
      this.router.navigate(['admincustransaction'])
      
    }else{
     alert("somethingwrong")
    }
  })
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


}
