import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookOrder, BookorderService } from '../bookorder.service';
@Component({
  selector: 'app-bookorder',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bookorder.component.html',
  styleUrl: './bookorder.component.css'
})
export class BookorderComponent {

  message:string="";
 issubmiting:boolean=false;
  bookorder:BookOrder=new BookOrder('','','','',0,'','No');


  constructor(private bookorderservice:BookorderService){ }
  
  
  bookorderdata(){
    console.log(this.bookorder.mobno)
   this.bookorderservice.bookorderdata(this.bookorder).subscribe(order=>{
    if(order){
      window.location.reload();
     alert("hey "+this.bookorder.fullname+" your Order Book Succesfully")
     

      
    }else{
      this.message="Something Went Wrong Please Check Detail Carefully"
    }
   });
   }
  getorder(){
    this.bookorderservice.getorder(this.bookorder.fullname).subscribe(orderd=>this.bookorder=orderd);
  }
  deleteorder(){
    this.bookorderservice.deleteorder(this.bookorder.fullname).subscribe(orederdelete=>{
      if(orederdelete){
        this.message="order deleted succesfully"
      }else{
        this.message="order not found with"+this.bookorder.fullname
      }
    })
  }

}
