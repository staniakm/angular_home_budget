import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AccountSummary} from './account';
import {Observable} from 'rxjs';
import {month, nextMonth, previousMonth} from '../variables';
import {RestApi} from '../rest-api';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // private accountUrl = 'http://localhost:8080/api/account';

  constructor(private restApi: RestApi, private httpClient: HttpClient) {
  }

  getAccountData(): Observable<AccountSummary[]> {
    const params = new HttpParams().set('month', String(month));
    return this.httpClient.get<AccountSummary[]>(this.restApi.accountUrl, {params});
  }

  previousMonth() {
    previousMonth();
  }

  nextMonth() {
    nextMonth();
  }

  fetchAllAccounts(): Observable<Account[]> {
    console.log(this.restApi.accountUrl)
    return this.httpClient.get<Account[]>(this.restApi.accountUrl + '/all');
  }
}
