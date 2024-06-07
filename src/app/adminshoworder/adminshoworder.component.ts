import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BookOrder, BookorderService } from '../bookorder.service';

@Component({
  selector: 'app-adminshoworder',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './adminshoworder.component.html',
  styleUrl: './adminshoworder.component.css'
})
export class AdminshoworderComponent implements OnInit {
  bookorderarr: BookOrder[] = [];
  message: string = "";
  isclick: boolean = false;
  isupdateclick = true;
  name: any;
  bookorder: BookOrder = new BookOrder('', '', '', '', 0, '', '')

  constructor(private bookorderservice: BookorderService, private router: Router) {
    this.name = localStorage.getItem("name")
   }
  ngOnInit(): void {
    

    if (this.name == null) {
      this.router.navigate(['adminlogin'])
    }
    this.getall();
  }
  gotoadminhome(){
    this.router.navigate(['adminindex'])
  }
  deleteorder(fullname: string) {

    this.bookorderservice.deleteorder(fullname).subscribe()
    this.getall();
    alert("order of " + fullname + " deleted Succesfully")
    window.location.reload();

  }
  getall() {
    this.bookorderservice.getallorder().subscribe(orderarr => this.bookorderarr = orderarr)
  }
  addorder() {
    this.router.navigate(['/getconnection'])
  }
  updateorderclick(fullname: string) {
    this.isupdateclick = false;
    this.isclick = true;
    this.getorder(fullname)

  }
  getorder(fullname: string) {
    this.bookorderservice.getorder(fullname).subscribe(order => this.bookorder = order)

  }
  updateorder() {
    this.bookorderservice.updateorder(this.bookorder).subscribe();
    this.isclick = false;
    this.getall();
    this.isupdateclick = true;
    alert("order of " + this.bookorder.fullname + " updated succesfully");
    window.location.reload();

  }
}
