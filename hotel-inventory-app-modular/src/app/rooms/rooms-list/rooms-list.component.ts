import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomDetails } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  standalone: false,
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() rooms: RoomDetails[]  = [];

  @Input() title: string = '';

  @Input() price = 0;

  @Output() selectedRoom = new EventEmitter<RoomDetails>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['title'] && changes['firstChange']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

  selectRoom(room: RoomDetails) {
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('On destroy')
  }
}
