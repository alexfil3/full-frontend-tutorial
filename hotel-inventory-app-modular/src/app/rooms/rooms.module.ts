import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouterOutlet } from '@angular/router';
import { RouteConfigToken } from '../services/routeConfig.service';
import { NgIf, JsonPipe, AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomsAddComponent,
    RoomsComponent,
    RoomsListComponent,
    // FilterPipe,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HeaderModule,
    ReactiveFormsModule,
    NgIf,
    // RoomsListComponent,
    JsonPipe,
    AsyncPipe,
    JsonPipe,
    HeaderModule,
    RouterOutlet,
    RouterLink,
    FilterPipe,
    // RoomsListComponent,
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: {title: 'Room'},
    },
  ]
})
export class RoomsModule { }
