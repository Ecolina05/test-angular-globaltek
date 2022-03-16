import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvoicesCreateComponent } from '@modules/invoices/components/invoices-create/invoices-create.component';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  invoiceFilter: string = '';
  totalInvoices: number = 0;

  constructor(private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openInvoiceCreateDialog(): void {
    this._dialog.open(InvoicesCreateComponent, {
      autoFocus: false,
      width: '1100px'
    });
  }
}
