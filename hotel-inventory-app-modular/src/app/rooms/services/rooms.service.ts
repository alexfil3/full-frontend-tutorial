import { Inject, Injectable } from '@angular/core';
import { RoomDetails } from '../rooms';
import { environment } from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  // headers = new HttpHeaders({'token': 'wedwewe1121212'})
  roomList: RoomDetails[] = [];
  getRooms$ = this.http.get<RoomDetails[]>('/api/rooms',).pipe(
    shareReplay(1)
  );

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
  private http: HttpClient) {
    console.log(this.config.apiEndpoint);
    console.log('rooms service is initialized')
  }

  getRoomList() {
    return this.http.get<RoomDetails[]>('/api/rooms');
  }

  addRoom(room: RoomDetails) {
    return this.http.post<RoomDetails[]>('/api/rooms', room);
  }

  editRoom(room: RoomDetails) {
    return this.http.put<RoomDetails[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRoom(id: string) {
    return this.http.delete<RoomDetails[]>(`/api/rooms/${id}`);
  }

  getPhotos() {
    const request = new HttpRequest('GET', 'https://jsonplaceholder.typicode.com/photos', {
      reportProgress: true
    });

    return this.http.request(request);
  }
}
