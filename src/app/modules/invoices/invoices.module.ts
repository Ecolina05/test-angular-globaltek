import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { InvoicesComponent } from './pages/invoices/invoices.component';
import { InvoicesSearchComponent } from './components/invoices-search/invoices-search.component';
import { InvoicesListComponent } from './components/invoices-list/invoices-list.component';
import { SearchPipe } from '@shared/pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InvoicesComponent,
    InvoicesSearchComponent,
    InvoicesListComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    InvoicesRoutingModule
  ],
})
export class InvoicesModule { }
