import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private userService: UserService, private router:Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.userService.checkUserIsLoggedIn();

      if (!this.userService.isUserLoggedIn) {
        //kullanıcı nereye gitmek istiyor?
        this.userService.returnUrl = route.url[0].path;
        this.router.navigate(['giris']);
        return false;
      }
    return true;
  }
  
}
