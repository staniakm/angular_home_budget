import {environment} from '../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestApi {

  shopUrl: string;
  accountUrl: string;
  budgetUrl: string;
  invoiceUrl: string;

  constructor() {

    this.shopUrl = environment.baseUrl + 'shop';
    this.accountUrl = environment.baseUrl + 'account';
    this.budgetUrl = environment.baseUrl + 'budget';
    this.invoiceUrl = environment.baseUrl + 'invoice';
  }
}
