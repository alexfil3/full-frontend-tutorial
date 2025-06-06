import { Component, OnInit, Inject } from '@angular/core';
import { localStorageToken } from './localstorage.token';
import { InitService } from './init.service';
import { ConfigService } from './services/config.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements  OnInit {
  title = 'hotel-inventory-app-modular';

  constructor(
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router,
  ) {
    console.log(initService.config)
  }
  
  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(event => {
      console.log(event)
    })

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(event => {
      console.log(event)
    })

    this.localStorage.setItem('name', 'Hilton Hotel');
  }
}
