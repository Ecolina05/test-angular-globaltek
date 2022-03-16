import { Component, Input, OnInit } from '@angular/core';
import { IInvoice, IInvoiceProduct } from '@models/IInvoice.interface';

@Component({
  selector: 'app-invoices-products-detail',
  templateUrl: './invoices-products-detail.component.html',
  styleUrls: ['./invoices-products-detail.component.scss']
})
export class InvoicesProductsDetailComponent implements OnInit {
  @Input() invoice: IInvoice | any = {};

  products: IInvoiceProduct[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = this.invoice.Detalle;
  }

  getTotalPriceByProduct(product: IInvoiceProduct): number {
    return product?.PrecioUnitario * product?.Cantidad;
  }

  getTotalPriceInvoice(withIva = false): number {
    const totalPrice = this.products
      .map((product: IInvoiceProduct) => product.PrecioUnitario * product.Cantidad)
      .reduce((prev, curr) => prev + curr);

    return withIva ? Math.floor(Number(totalPrice + this.invoice?.IVA)) : Math.floor(Number(totalPrice));
  }
}
