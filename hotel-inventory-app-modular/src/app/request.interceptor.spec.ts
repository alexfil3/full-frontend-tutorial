import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { of } from 'rxjs';
import { RequestInterceptor } from './request.interceptor';

describe('RequestInterceptor', () => {
  let interceptor: RequestInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestInterceptor]
    });

    interceptor = TestBed.inject(RequestInterceptor);
  });

  it('should add token header to POST request', () => {
    const req = new HttpRequest('POST', '/api/data', {});
    const handleSpy = jasmine.createSpy().and.returnValue(of({} as HttpEvent<unknown>));
    const next: HttpHandler = { handle: handleSpy };
  
    interceptor.intercept(req, next).subscribe();
  
    const modifiedRequest = handleSpy.calls.mostRecent().args[0] as HttpRequest<unknown>;
    expect(modifiedRequest.headers.has('token')).toBeTrue();
    expect(modifiedRequest.headers.get('token')).toBe('wedwewe1121212');
  });
  

  it('should not modify non-POST request', () => {
    const req = new HttpRequest('GET', '/api/data');
    const handleSpy = jasmine.createSpy().and.returnValue(of({} as HttpEvent<unknown>));
    const next: HttpHandler = { handle: handleSpy };

    interceptor.intercept(req, next).subscribe();

    const unmodifiedRequest = handleSpy.calls.mostRecent().args[0] as HttpRequest<unknown>;
    expect(unmodifiedRequest.headers.has('token')).toBeFalse();
  });
});


