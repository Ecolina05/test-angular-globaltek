import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

import { InvoicesRoutingModule } from './invoices-routing.module';

import { InvoicesComponent } from './pages/invoices/invoices.component';
import { InvoicesSearchComponent } from './components/invoices-search/invoices-search.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoicesDetailsComponent } from './components/invoices-details/invoices-details.component';
import { InvoicesProductComponent } from './components/invoices-product/invoices-product.component';
import { SearchPipe } from '@shared/pipes/search.pipe';


@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesSearchComponent,
    InvoicesListComponent,
    InvoicesDetailsComponent,
    InvoicesProductComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    InvoicesRoutingModule
  ],
})
export class InvoicesModule { }
