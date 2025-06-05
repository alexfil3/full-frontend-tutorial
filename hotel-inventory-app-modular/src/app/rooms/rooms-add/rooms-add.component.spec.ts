import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAddComponent } from './rooms-add.component';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('RoomsAddComponent', () => {
  let component: RoomsAddComponent;
  let fixture: ComponentFixture<RoomsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [RoomsAddComponent],
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

    fixture = TestBed.createComponent(RoomsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
