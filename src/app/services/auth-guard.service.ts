import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  // tslint:disable-next-line:no-shadowed-variable
  canActivate(route, state: RouterStateSnapshot){

    if (this.authService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['/login'],
      {
        queryParams: {
          returnUrl: state.url
        }
    });
    return false;



  }
}
