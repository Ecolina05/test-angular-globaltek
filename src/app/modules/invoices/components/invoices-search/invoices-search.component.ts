import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-invoices-search',
  templateUrl: './invoices-search.component.html',
  styleUrls: ['./invoices-search.component.scss']
})
export class InvoicesSearchComponent implements OnInit {

  @Output() invoiceFilter = new EventEmitter();
  filter: FormControl;

  constructor() {
    this.filter = new FormControl('');
  }

  ngOnInit(): void {
  }

  emitInvoiceFilter() {
    this.invoiceFilter.emit(this.filter.value);
  }

}
