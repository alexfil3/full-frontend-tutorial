import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfigService } from '../services/config.service';
import { RouteConfigToken } from '../services/routeConfig.service';
import { BookingComponent } from './booking.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { BookingService } from './booking.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatError, MatFormField, MatHint, MatLabel } from '@angular/material/form-field';
import { MatDatepicker, MatDatepickerToggle, MatDatepickerModule } from '@angular/material/datepicker';
import { MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle } from '@angular/material/expansion';
import { MatCheckbox } from '@angular/material/checkbox';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';


describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule,
        MatExpansionModule
      ],
      declarations: [BookingComponent],
      providers: [
        ConfigService,
        HttpClient,
        HttpHandler,
        FormBuilder,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'mock-value'
              }
            }
          }
        },
        {
          provide: RouteConfigToken,
          useValue: {}
        },
        {
          provide: BookingService,
          useValue: {
            bookRoom: () => of({})
          }
        }
      ]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
