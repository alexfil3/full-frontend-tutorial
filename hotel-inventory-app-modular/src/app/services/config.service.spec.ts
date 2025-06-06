import { TestBed } from '@angular/core/testing';
import { ConfigService } from './config.service';
import { RouteConfigToken } from './routeConfig.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfigService,
        {
          provide: RouteConfigToken,
          useValue: { apiUrl: 'http://test-api' }
        }
      ]
    });

    service = TestBed.inject(ConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

