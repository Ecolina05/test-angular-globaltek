import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IInvoiceProduct } from '@models/IInvoice.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoices-products-create',
  templateUrl: './invoices-products-create.component.html',
  styleUrls: ['./invoices-products-create.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InvoicesProductsCreateComponent),
      multi: true
    }
  ]
})
export class InvoicesProductsCreateComponent implements OnInit, OnDestroy, ControlValueAccessor {

  tableColumns: string[] = [];
  changeFormSub: Subscription;
  products: FormArray;
  value: [] = [];

  onChange: any = (_: any) => { };
  onTouch: any = () => { };

  constructor(private _formBuilder: FormBuilder) {
    this.tableColumns = ['Item', 'Producto', 'Cantidad', 'Precio unitario', 'Descuento', 'IVA', 'Subtotal', 'Opciones'];
    this.changeFormSub = new Subscription();
    this.products = new FormArray([]);
  }

  ngOnInit(): void {
    this.addProduct();
    this.onChangeForm();
  }

  ngOnDestroy(): void {
    this.changeFormSub?.unsubscribe();
  }

  addProduct(): void {
    const FORM = this._formBuilder.group({
      Item: '',
      Producto: '',
      Cantidad: '',
      PrecioUnitario: '',
      Descuento: '',
      IVA: 19
    });

    this.products.push(FORM);
  }

  deleteProduct(index: number): void {
    this.products.removeAt(index);
  }

  onChangeForm(): void {
    this.changeFormSub = this.products.valueChanges
      .subscribe(() => {
        this.value = this.products.value;
        this.onTouch();
        this.onChange(this.value);
      });
  }

  getTotalPriceProduct(product: IInvoiceProduct): number {
    return product.PrecioUnitario * product.Cantidad;
  }

  writeValue(obj: any): void {
    this.value = obj || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
}
