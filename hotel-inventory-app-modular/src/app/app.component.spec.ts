import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { APP_CONFIG } from './AppConfig/appconfig.service';
import { RouteConfigToken } from './services/routeConfig.service';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatToolbar } from '@angular/material/toolbar';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatSidenav,
        MatSidenavContainer,
        MatToolbar,
        MatNavList,
        MatListItem,
        MatSidenavContent,
        MatIcon,
      ],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: APP_CONFIG, useValue: {} },
        { provide: RouteConfigToken, useValue: {} },
      ],
      declarations: [
        AppComponent,
        AppNavComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'hotel-inventory-app-modular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('hotel-inventory-app-modular');
  });
});
