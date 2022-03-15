import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoiceFilter: string = '';
  totalInvoices: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
