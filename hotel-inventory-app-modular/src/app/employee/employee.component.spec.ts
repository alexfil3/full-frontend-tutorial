import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: APP_SERVICE_CONFIG,
          useValue: {},
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
