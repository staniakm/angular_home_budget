import {Injectable} from '@angular/core';
import {RestApi} from '../rest-api';
import {HttpClient, HttpParams} from '@angular/common/http';
import {month} from '../variables';
import {Invoice, InvoiceDetails} from './invoice';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private restApi: RestApi, private http: HttpClient) {
  }


  getInvoices(): Observable<Invoice[]> {
    const params = new HttpParams().set('month', String(month));
    return this.http.get<Invoice[]>(this.restApi.invoiceUrl, {params});
  }

  getInvoiceDetails(listId: number): Observable<InvoiceDetails[]> {
    return this.http.get<InvoiceDetails[]>(this.restApi.invoiceUrl + '/' + listId);
  }
}

