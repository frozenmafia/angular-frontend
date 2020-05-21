import { JwtHelper } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from "rxjs/Observable"; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser:'';
  private url="http://127.0.0.1:5000/";

  constructor(private httpClient:HttpClient) { 

  }

  login(credentials){
    credentials['type']='login';
    return this.httpClient.post(this.url.concat("api/authenticate"),
      JSON.stringify(credentials))
      .pipe(map(response=>{
        let result = response;
        console.log(result)
        console.log(result['token']);
        if(result && result['token']){
          localStorage.setItem('token',result['token']);
          let jwt = new JwtHelper();
          this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
          console.log(this.currentUser['userId'])
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

    return true;

  }
}

