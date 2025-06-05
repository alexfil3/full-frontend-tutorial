import { TestBed } from '@angular/core/testing';
import { CommentGuard } from './comment.guard';
import { CommentService } from '../comment.service';
import { of } from 'rxjs';

describe('CommentGuard', () => {
  let guard: CommentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CommentGuard,
        { provide: CommentService, useValue: { getComments: () => of([]) } }
      ]
    });

    guard = TestBed.inject(CommentGuard);
  });

  it('should resolve without error', () => {
    guard.resolve({} as any, {} as any); // просто вызов
  });
});
