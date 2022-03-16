import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { InvoicesRoutingModule } from './invoices-routing.module';

import { InvoicesComponent } from './pages/invoices/invoices.component';
import { InvoicesSearchComponent } from './components/invoices-search/invoices-search.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { InvoicesDetailsComponent } from './components/invoices-details/invoices-details.component';
import { InvoicesProductsDetailComponent } from './components/invoices-products-detail/invoices-products-detail.component';
import { InvoicesCreateComponent } from './components/invoices-create/invoices-create.component';
import { InvoicesProductsCreateComponent } from './components/invoices-products-create/invoices-products-create.component';
import { SearchPipe } from '@shared/pipes/search.pipe';

@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesSearchComponent,
    InvoicesListComponent,
    InvoicesDetailsComponent,
    InvoicesProductsDetailComponent,
    InvoicesCreateComponent,
    InvoicesProductsCreateComponent,
    SearchPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    InvoicesRoutingModule
  ]
})
export class InvoicesModule { }
