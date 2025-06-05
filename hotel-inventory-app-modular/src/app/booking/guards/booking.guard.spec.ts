import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookingGuard } from './booking.guard';
import { BookingComponent } from '../booking.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';

describe('BookingGuard', () => {
  let guard: BookingGuard;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;

  beforeEach(() => {
    snackBarSpy = jasmine.createSpyObj('MatSnackBar', ['open']);

    TestBed.configureTestingModule({
      providers: [
        BookingGuard,
        { provide: MatSnackBar, useValue: snackBarSpy }
      ]
    });

    guard = TestBed.inject(BookingGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow deactivation if form is pristine', () => {
    const component = {
      bookingForm: {
        pristine: true
      }
    } as unknown as BookingComponent;

    const result = guard.canDeactivate(
      component,
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(result).toBeTrue();
  });

  it('should block deactivation and show snackbar if form is dirty', () => {
    const component = {
      bookingForm: {
        pristine: false
      }
    } as unknown as BookingComponent;

    const result = guard.canDeactivate(
      component,
      {} as ActivatedRouteSnapshot,
      {} as RouterStateSnapshot
    );

    expect(snackBarSpy.open).toHaveBeenCalledWith('You have unsaved changes', 'DISCARD');
    expect(result).toBeFalse();
  });
});

