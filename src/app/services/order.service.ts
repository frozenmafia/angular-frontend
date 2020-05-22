import { HttpClient } from '@angular/common/http';
import { RequestOptions, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthHttp } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: AuthHttp,
              private http: HttpClient) { }

  getOrders(){

    return this.httpClient.get('/api/orders')
      .pipe(map(response => response));
  }
}
