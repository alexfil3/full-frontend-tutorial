import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, GuardResult, MaybeAsync, Route, UrlSegment, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';
// import { LoginService } from '';

@Injectable({
  providedIn: 'root'
})
export class RoomsGuard implements CanActivateChild, CanLoad {
  constructor(private loginService: LoginService) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    return this.loginService.isAdmin;
  }

  canLoad(route: Route, segments: UrlSegment[]): MaybeAsync<GuardResult> {
    return true;
  }
}