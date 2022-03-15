export interface IInvoice {
  id: string;
  NombreCliente: string;
  DocumentoCliente: number;
  Fecha: Date;
  NumeroFactura: number;
  TipodePago: string;
  IVA: number;
  Descuento: number
  Detalle: IInvoiceProduct[];
}

export interface IInvoiceProduct {
  Item: number;
  Producto: string;
  Cantidad: number
  PrecioUnitario: number;
}