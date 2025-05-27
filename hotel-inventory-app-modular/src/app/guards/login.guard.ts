import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, GuardResult, MaybeAsync, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.isLoggedIn ? true : this.router.navigate(['/login']); 
  }

  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return this.loginService.isLoggedIn;
  }
}