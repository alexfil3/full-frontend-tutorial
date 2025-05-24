import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { RoomsBookingComponent } from './rooms-booking/rooms-booking.component';
import { RoomsAddComponent } from './rooms-add/rooms-add.component';
import { FormsModule, NgModel } from '@angular/forms';
import { HeaderModule } from '../header/header.module';
import { RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [
    RoomsBookingComponent,
    RoomsAddComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    RoomsComponent,
    RoomsListComponent,
    FormsModule,
    HeaderModule,
  ]
})
export class RoomsModule { }
