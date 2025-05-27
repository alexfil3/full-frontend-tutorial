import { Component, ViewChild, ViewContainerRef, AfterViewInit, OnInit, ElementRef, Optional, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
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

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
    @Inject(localStorageToken) private localStorage: any,
    private initService: InitService,
    private configService: ConfigService,
    private router: Router,
  ) {
    console.log(initService.config)
  }
  
  ngOnInit(): void {
    // this.router.events.subscribe((event) => {
    //   console.log(event);
    // })
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

    this.loggerService?.log('App component ngOnInit()');
    this.name.nativeElement.innerText = 'Hotel California';
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 1000;
  // }
}
