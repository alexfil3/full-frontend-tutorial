import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, GuardResult, MaybeAsync, Route, UrlSegment, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Comments } from '../comment';
import { CommentService } from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<Comments[]> {
  constructor(private commentService: CommentService) { }
  
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Comments[]> | Promise<Comments[]> | Comments[] {
    return this.commentService.getComments();
  }
}