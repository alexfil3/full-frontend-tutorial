import { Component } from '@angular/core';
import { RoomDetails } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  standalone: false,
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss',
})
export class RoomsAddComponent {
  room: RoomDetails = {
    roomType: '',
    amenities: '',
    roomNumber: '',
    price: 0,
    photos: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    rating: 0,
  }

  successMessage: string = ''

  constructor(private roomsService: RoomsService) { }
  
  addRoom(roomsForm: NgForm) {
    this.roomsService
      .addRoom(this.room)
      .subscribe((data) => {
        this.successMessage = 'Room added successfully';
        roomsForm.resetForm({
          roomType: '',
          amenities: '',
          roomNumber: '',
          price: 0,
          photos: '',
          checkinTime: new Date(),
          checkoutTime: new Date(),
          rating: 0,
        });
      })
  }
}
