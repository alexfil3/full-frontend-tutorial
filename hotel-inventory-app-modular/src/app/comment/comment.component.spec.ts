import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CommentComponent } from './comment.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    declarations: [CommentComponent],
    providers: [
      HttpClient,
      HttpHandler,
      {
        provide: ActivatedRoute,
        useValue: {
          data: of({ comments: [] }) // ✔ корректный Observable
        }
      }
    ]
  }).compileComponents();

  fixture = TestBed.createComponent(CommentComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
});


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
