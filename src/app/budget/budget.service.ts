import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {month} from '../variables';
import {RestApi} from '../rest-api';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {


  constructor(private api: RestApi, private httpClient: HttpClient) {
  }

  getBudgets(): Observable<IMonthBudget> {
    const params = new HttpParams().set('month', String(month));
    return this.httpClient.get<IMonthBudget>(this.api.budgetUrl, {params});
  }
}

export interface IMonthBudget {
  date: string;
  totalSpend: number;
  totalPlanned: number;
  totalEarned: number;
  budgets: IBudget[];
}

export interface IBudget {
  category: string;
  spent: number;
  planned: number;
  percentage: number;
}
