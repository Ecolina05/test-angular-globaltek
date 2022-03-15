import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IInvoice, IInvoiceProduct } from '@models/IInvoice.interface';
import { InvoicesService } from '@modules/invoices/services/invoices.service';
import { InvoicesDetailsComponent } from '../invoices-details/invoices-details.component';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {
  @Input() invoiceFilter: string = '';
  @Output() totalInvoices = new EventEmitter();

  tableColumns: string[] = [];
  invoices: IInvoice[] = [];

  constructor(
    private _invoicesService: InvoicesService,
    private _dialog: MatDialog) {
    this.tableColumns = ['Número de Factura', 'Cliente', 'Fecha de factura', 'Total sin IVA', 'Total con IVA', 'Opciones'];
  }

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices(): void {
    this._invoicesService.getInvoices()
      .subscribe(invoices => {
        this.invoices = invoices;
        this.totalInvoices.emit(this.invoices.length);
      });
  }

  getTotalPriceInvoice(invoice: IInvoice, withIva = false): number {
    const totalPrice = invoice.Detalle
      .map((product: IInvoiceProduct) => product.PrecioUnitario * product.Cantidad)
      .reduce((prev, curr) => prev + curr);

    return withIva ? Math.floor(Number(totalPrice + invoice?.IVA)) : Math.floor(Number(totalPrice));
  }

  showInvoiceDetails(invoice: IInvoice): void {
    this._dialog.open(InvoicesDetailsComponent, {
      autoFocus: false,
      data: invoice,
      width: '800px'
    })
  }
}
