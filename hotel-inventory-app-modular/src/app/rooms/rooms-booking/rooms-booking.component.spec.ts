import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RoomsBookingComponent } from './rooms-booking.component';
import { ActivatedRoute } from '@angular/router';

describe('RoomsBookingComponent', () => {
  let component: RoomsBookingComponent;
  let fixture: ComponentFixture<RoomsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsBookingComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {
          paramMap: of({
            get: (key: string) => 'mock-id'
          })
        } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
