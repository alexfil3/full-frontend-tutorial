import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, GuardResult, MaybeAsync, Route, UrlSegment, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { UrlTree } from '@angular/router';
import { BookingComponent } from '../booking.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class BookingGuard implements CanDeactivate<unknown> {
  constructor(private _snackBar: MatSnackBar
) {}
  canDeactivate(
    component: BookingComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.bookingForm.pristine) {
      return component.bookingForm.pristine;
    } else {
      this._snackBar.open('You have unsaved changes', 'DISCARD')
      return false
    }
  }
}