import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IInvoice } from '@models/IInvoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoicesService {

  constructor(private _http: HttpClient) { }

  getInvoices(): Observable<IInvoice[]> {
    return this._http.get<IInvoice[]>(environment.apiUrl);
  }
}
