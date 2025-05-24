import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomDetails } from '../rooms';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms-list',
  imports: [NgFor, LowerCasePipe, CurrencyPipe, DatePipe, DecimalPipe, NgClass, RouterLink],
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnChanges, OnDestroy {
  @Input() rooms: RoomDetails[] | null = [];

  @Input() title: string = '';

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
