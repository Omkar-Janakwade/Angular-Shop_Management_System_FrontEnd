import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpclient:HttpClient) { }

  allname() {
    return this, this.httpclient.get<string[]>("http://localhost:8080/allname")
  }

  savetransaction(transaction:DailyTransaction){
    return this.httpclient.post<boolean>("http://localhost:8080/addtransaction",transaction)
  }
  getcustransaction(fullname:string){
    return this.httpclient.get<DailyTransaction[]>("http://localhost:8080/gettransactions/"+fullname)
  }
  deletcusdata(){
    return this.httpclient.delete<boolean>("http://localhost:8080/deletedcusdata")
  }

}

export class DailyTransaction {

  fullname: string;
  transactionDate: string;
  itemName: string;
  quantity: string;
  deliveryBoyName: string;
  constructor(fullname: string, transactionDate: string, itemName: string, quantity: string, deliveryBoyName: string) {
    this.fullname = fullname;
    this.transactionDate = transactionDate;
    this.itemName = itemName;
    this.quantity = quantity;
    this.deliveryBoyName = deliveryBoyName;
  }
}