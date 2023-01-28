import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { DessertComponent } from './catalogue/dessert/dessert.component';
import { CashComponent } from './cash/cash.component';
import { OrderComponent } from './order/order.component';
import { BreadComponent } from './catalogue/bread/bread.component';
import { AddCatalogueComponent } from './catalogue/add-catalogue/add-catalogue.component';
import { UpdateCatalogueComponent } from './catalogue/update-catalogue/update-catalogue.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InvoiceComponent,
    DessertComponent,
    CashComponent,
    OrderComponent,
    BreadComponent,
    AddCatalogueComponent,
    UpdateCatalogueComponent
  ],
  imports: [

    RouterModule,
  ],
  exports:[
    DashboardComponent,
    OrderComponent
  ]
})
export class PagesModule { }
