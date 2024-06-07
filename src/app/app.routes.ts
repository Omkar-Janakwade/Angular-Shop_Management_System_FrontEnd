import { Routes } from '@angular/router';
import { AddtransactionComponent } from './addtransaction/addtransaction.component';
import { AdminCustomerTransactionComponent } from './admin-customer-transaction/admin-customer-transaction.component';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminshowconnectionComponent } from './adminshowconnection/adminshowconnection.component';
import { AdminshoworderComponent } from './adminshoworder/adminshoworder.component';
import { AppComponent } from './app.component';
import { BookorderComponent } from './bookorder/bookorder.component';
import { CustomerindexComponent } from './customerindex/customerindex.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { GetconnectionComponent } from './getconnection/getconnection.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { UpdateconnectionComponent } from './updateconnection/updateconnection.component';




export const routes: Routes = [

    { path: 'getconnection', component: GetconnectionComponent },
    { path: 'bookorder', component: BookorderComponent },
    { path: 'appcomp', component: AppComponent },
    { path: 'customerlogin', component: CustomerloginComponent },
    { path: 'adminlogin', component: AdminloginComponent },
    { path: 'customerindex', component: CustomerindexComponent },
    { path: 'adminindex', component: AdminindexComponent },
    {path:'admincustransaction',component:AdminCustomerTransactionComponent},
    { path: 'adminshoworder', component: AdminshoworderComponent },
    { path: 'admonshowconnection', component: AdminshowconnectionComponent },
    { path: 'updateconnection', component: UpdateconnectionComponent },
    {path:'addtransaction',component:AddtransactionComponent},
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: NotFoundComponentComponent }



];
