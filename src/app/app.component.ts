import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { GetconnectionComponent } from './getconnection/getconnection.component';
import { BookorderComponent } from './bookorder/bookorder.component';
import { HomeComponent } from './home/home.component';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,GetconnectionComponent,BookorderComponent,HomeComponent,AddtransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jwpfinal';

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  getMenuContainerClasses() {
    return {
      'menu-container': true,
      'menu-open': this.isMenuOpen
    };
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
