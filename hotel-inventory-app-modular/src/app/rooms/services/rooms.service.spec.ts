import { TestBed } from '@angular/core/testing';
import { RouteConfigToken } from '../../services/routeConfig.service';
import { RoomsService } from './rooms.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';

describe('RoomsService', () => {
  let service: RoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, { provide: RouteConfigToken, useValue: {} }, {
        provide: APP_SERVICE_CONFIG,
        useValue: {}
      }]
    });
    service = TestBed.inject(RoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
