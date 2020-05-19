import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url="http://127.0.0.1:5000/";

  constructor(private httpClient:HttpClient) { 

  }

  login(credentials){
    return this.httpClient.post(this.url.concat("api/authenticate"),JSON.stringify(credentials));
  }
  logout(){

  }
  isLoggedIn(){

    return true;

  }
}

