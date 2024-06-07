import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpclient: HttpClient) { }
  addadmin(admin: Admin) {
    return this.httpclient.post<boolean>("http://localhost:8080/addadmin", admin)
  }
  alladmin(){
    return this.httpclient.get<Admin[]>("http://localhost:8080/getalladmin")
  }

  loginadmin(admin: Admin) {
   
    return this.httpclient.post<boolean>("http://localhost:8080/loginadmin", admin)
  }

}

export class Admin {
  name: string;
  password: string;
  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}

