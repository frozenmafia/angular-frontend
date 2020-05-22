import { JwtHelper, tokenNotExpired } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://192.168.43.145:5000/';

  constructor(private httpClient: HttpClient) {

  }

  login(credentials){
    credentials.type = 'login';
    return this.httpClient.post(this.url.concat('api/authenticate'),
      JSON.stringify(credentials))
      .pipe(map(response => {
        const result = response;
        console.log(result);
        // tslint:disable-next-line:no-string-literal
        console.log(result['token']);
        // tslint:disable-next-line:no-string-literal
        if (result && result['token']){
          // tslint:disable-next-line:no-string-literal
          localStorage.setItem('token', result['token']);
          console.log('=====>>', this.currentUser());
          return true;
        }
        else{
          return false;
        }

      }));
  }
  logout(){
    localStorage.removeItem('token');
  }
  isLoggedIn(){

    console.log(tokenNotExpired('token'));
    return tokenNotExpired('token');
  }

  currentUser(){
    const token = localStorage.getItem('token');
    if (!token) { return null; }
    return new JwtHelper().decodeToken(token);

  }

}

