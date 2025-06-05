import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LoginGuard } from './login.guard';
import { LoginService } from '../login/login.service';

describe('LoginGuard', () => {
  let guard: LoginGuard;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    loginServiceSpy = { isLoggedIn: false } as any;
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
  
    TestBed.configureTestingModule({
      providers: [
        LoginGuard,
        { provide: LoginService, useValue: loginServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    });
  
    guard = TestBed.inject(LoginGuard);
  });

  it('should allow activation if logged in', () => {
    loginServiceSpy.isLoggedIn = true;
    expect(guard.canActivate({} as any, {} as any)).toBeTrue();
  });

  it('should redirect to /login if not logged in', () => {
    loginServiceSpy.isLoggedIn = false;
    guard.canActivate({} as any, {} as any);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/login']);
  });

  it('should allow loading if logged in', () => {
    loginServiceSpy.isLoggedIn = true;
    expect(guard.canLoad({} as any, []))
      .toBeTrue();
  });

  it('should not allow loading if not logged in', () => {
    loginServiceSpy.isLoggedIn = false;
    expect(guard.canLoad({} as any, []))
      .toBeFalse();
  });
});
