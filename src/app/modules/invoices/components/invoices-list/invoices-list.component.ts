import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInvoice, IInvoiceProduct } from '@models/IInvoice.interface';
import { InvoicesService } from '@modules/invoices/services/invoices.service';

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

  constructor(private _invoicesService: InvoicesService) {
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

  getTotalPriceInvoice(invoice: IInvoice, withIva = false): any {
    const totalPrice = invoice.Detalle
      .map((product: IInvoiceProduct) => product.PrecioUnitario)
      .reduce((prev, curr) => prev + curr);

    return withIva ? Math.floor(Number(totalPrice + invoice?.IVA)) : Math.floor(Number(totalPrice));
  }

}
