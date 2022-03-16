export interface IInvoice {
  id: number;
  NombreCliente: string;
  DocumentoCliente: number;
  Fecha: string;
  NumeroFactura: number;
  TipodePago: 'Contado' | 'Crédito';
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