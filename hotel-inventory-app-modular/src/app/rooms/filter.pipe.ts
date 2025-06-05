import { Pipe, PipeTransform } from '@angular/core';
import { RoomDetails } from './rooms';

@Pipe({
  name: 'filter',
  // standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(rooms: RoomDetails[], price: number): RoomDetails[]{
    return rooms.filter((room) => room.price > price) || [];
  }

}
