import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetconnectionService {


  constructor(private httpclient: HttpClient) { }

  GetConnectiondata(getconnection: GetConnection) {
    return this.httpclient.post<boolean>("http://localhost:8080/storeConnection", getconnection)

  }
  getconnection(fullname: string) {

    return this.httpclient.get<GetConnection>("http://localhost:8080/getconnection/" + fullname)
  }

  deleteconnection(fullname: string) {

    return this.httpclient.delete<Boolean>("http://localhost:8080/deleteconnection/" + fullname)
  }
  logincustomer(fullname: string, password: string) {

    return this.httpclient.get<boolean>("http://localhost:8080/login/" + fullname + "/" + password)
  }
  getAllConnection() {
    return this.httpclient.get<GetConnection[]>("http://localhost:8080/getallconnection")
  }
  updateconnection(getconnection: GetConnection) {
    return this.httpclient.put("http://localhost:8080/updateconnection", getconnection);
  }
  updatepassword(fullname: string, password: string) {
    return this.httpclient.get<boolean>("http://localhost:8080/updatepassword/" + fullname + "/" + password);
  }
  
}

export class GetConnection {
  fullname: string;
  password: string;
  address: string;
  mobno: number;
  emailid: string;
  dailybottle: number;
  startdate: string;
  totalbottle: string;


  constructor(fullname: string, password: string, address: string, mobno: number, emailid: string, dailybottle: number, startdate: string, totalbottle: string) {
    this.fullname = fullname;
    this.password = password;
    this.address = address;
    this.mobno = +91+mobno;
    this.emailid = emailid;
    this.dailybottle = dailybottle;
    this.startdate = startdate;
    this.totalbottle = totalbottle;

  }
  
}
