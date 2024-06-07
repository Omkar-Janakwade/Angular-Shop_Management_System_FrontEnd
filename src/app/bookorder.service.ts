import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookorderService {

  constructor(private httpclient: HttpClient) { }

  bookorderdata(bookorder: BookOrder) {
    return this.httpclient.post("http://localhost:8080/bookorderdata", bookorder)
  }
  getorder(fullname: string) {
    return this.httpclient.get<BookOrder>("http://localhost:8080/getorder/" + fullname)
  }
  deleteorder(fullname: string) {
    return this.httpclient.delete<BookOrder>("http://localhost:8080/deleteorder/" + fullname)
  }
  getallorder() {
    return this.httpclient.get<BookOrder[]>("http://localhost:8080/getAllorder")
  }
  updateorder(order: BookOrder) {
    return this.httpclient.put("http://localhost:8080/updateorder", order);
  }


}
export class BookOrder {


  fullname: string;
  address: string;
  mobno: string;
  emailid: string;
  totalbottle: number;
  date: string;
  provide: string;

  constructor(fullname: string, address: string, mobno: string, emailid: string, totalbottle: number, date: string, provide: string) {
    this.fullname = fullname;
    this.address = address;
    this.mobno = "+91"+mobno;
    this.emailid = emailid;
    this.totalbottle = totalbottle;
    this.date = date;
    this.provide = provide;
  }

}