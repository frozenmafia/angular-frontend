import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  signIn(credentials){
    this.authService.login(credentials)
      .subscribe(result=>{
        if(result)
          console.log(result)
        else
          console.log(result)
      })

  
  }
  

}
