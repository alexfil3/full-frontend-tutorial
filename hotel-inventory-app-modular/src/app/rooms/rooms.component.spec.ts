import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoomsComponent } from './rooms.component';
import { RoomsService } from './services/rooms.service';
import { ConfigService } from '../services/config.service';
import { of } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { FilterPipe } from './filter.pipe';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsComponent, RoomsListComponent],
      imports: [ReactiveFormsModule, RouterOutlet, FilterPipe],
      providers: [
        {
          provide: RoomsService,
          useValue: {
            getRooms$: of([]),
            getPhotos: () => of({ type: 0, loaded: 0 }),
            addRoom: () => of([]),
            editRoom: () => of([]),
            deleteRoom: () => of([])
          }
        },
        {
          provide: ConfigService,
          useValue: {}
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
