import { TestBed } from '@angular/core/testing';
import { RoomsGuard } from './room.guard';
import { LoginService } from '../../login/login.service';

describe('RoomsGuard', () => {
  let guard: RoomsGuard;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;

  beforeEach(() => {
    loginServiceSpy = jasmine.createSpyObj('LoginService', [], { isAdmin: false });

    TestBed.configureTestingModule({
      providers: [
        RoomsGuard,
        { provide: LoginService, useValue: loginServiceSpy }
      ]
    });

    guard = TestBed.inject(RoomsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should allow access for admin (canActivateChild)', () => {
    Object.defineProperty(loginServiceSpy, 'isAdmin', { get: () => true });
    expect(guard.canActivateChild({} as any, {} as any)).toBeTrue();
  });
  
  it('should block access for non-admin (canActivateChild)', () => {
    Object.defineProperty(loginServiceSpy, 'isAdmin', { get: () => false });
    expect(guard.canActivateChild({} as any, {} as any)).toBeFalse();
  });  

  it('should always allow loading (canLoad)', () => {
    expect(guard.canLoad({} as any, [])).toBeTrue();
  });
});
