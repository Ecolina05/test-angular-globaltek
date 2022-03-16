import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IInvoice } from '@models/IInvoice.interface';

@Component({
  selector: 'app-invoices-create',
  templateUrl: './invoices-create.component.html',
  styleUrls: ['./invoices-create.component.scss']
})
export class InvoicesCreateComponent implements OnInit {

  invoiceForm: FormGroup | any = {};
  createdInvoices: IInvoice[] = [];

  constructor(
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.onInitForm();
    this.createdInvoices = JSON.parse(localStorage.getItem('createdInvoices') || '[]');
  }

  onInitForm(): void {
    this.invoiceForm = this._formBuilder.group({
      id: Number(localStorage.getItem('totalInvoices')) + 1,
      NombreCliente: ['', Validators.required],
      DocumentoCliente: '',
      Fecha: new Date(),
      NumeroFactura: '',
      TipodePago: ['', Validators.required],
      Detalle: []
    });
  }

  createinvoice(): void {
    if (this.invoiceForm.valid) {
      if (!this.findInvoiceCreated(this.invoiceForm.controls.id.value)) {
        this.createdInvoices.push(this.invoiceForm.value);
        localStorage.setItem('createdInvoices', JSON.stringify(this.createdInvoices));
        localStorage.setItem('totalInvoices', this.invoiceForm.controls.id.value);
        this._snackBar.open('Factura creada!', '', {
          horizontalPosition: 'right',
          duration: 3000
        });
        window.dispatchEvent(new Event('updateInvoiceList'));
        this._dialog.closeAll();
      } else {
        this._snackBar.open('Ya existe una factura con la misma ID', '', {
          horizontalPosition: 'right',
          duration: 3000
        });
      }
    } else {
      this._snackBar.open('Nombre Cliente y Tipo de Pago son requeridos!', '', {
        horizontalPosition: 'right',
        duration: 3000
      });
    }
  }

  findInvoiceCreated(invoiceId: number): any {
    return this.createdInvoices.find(invoice => invoice.id === invoiceId);
  }
}
