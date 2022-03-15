import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IInvoice } from '@models/IInvoice.interface';

@Component({
  selector: 'app-invoices-details',
  templateUrl: './invoices-details.component.html',
  styleUrls: ['./invoices-details.component.scss']
})
export class InvoicesDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public invoiceData: IInvoice) { }

  ngOnInit(): void {
    console.log(this.invoiceData);
  }

}
