import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IShop, ShopItem} from './shop';
import {HttpClient} from '@angular/common/http';
import {RestApi} from '../rest-api';

@Injectable({
  providedIn: 'root'
})
export class ShopService {


  // url = 'http://localhost:8080/api/shop';

  constructor(private restApi: RestApi, private http: HttpClient) {
  }

  fetchAll(): Observable<IShop[]> {
    console.log(this.restApi.accountUrl)
    return this.http.get<IShop[]>(this.restApi.shopUrl + '/all');
  }

  fetchAllShopItems(shopId: number): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>(this.restApi.shopUrl + '/' + shopId);
  }
}
