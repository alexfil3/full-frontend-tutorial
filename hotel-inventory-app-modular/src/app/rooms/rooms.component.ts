import { AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomDetails } from './rooms';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { catchError, Observable, Subscription, of, Subject, map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { HeaderModule } from '../header/header.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  standalone: false,
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'] // Fixed from 'styleUrl' to 'styleUrls'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, OnDestroy {
  hotelName: string = 'Hotel California';
  numberOfRooms: number = 100;
  hideRooms: boolean = true;
  title: string = 'Room list';
  rooms: RoomDetails[] = [];
  selectedRoom!: RoomDetails;
  roomsInfo: Room = {
    totalRooms: 100,
    availableRooms: 50,
    bookedRooms: 35,
  };

  subscription!: Subscription;
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  rooms$ = this.roomsService.getRooms$.pipe(
    catchError(err => {
      // console.log(err);
      this.error$.next(err.message);
      return of([])
    })
  )

  stream = new Observable<string>(observer => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.next('user4');
    observer.complete();
    observer.error('error');
  });

  @ViewChild(HeaderComponent) HeaderComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) HeaderComponents!: QueryList<HeaderComponent>;

  totalBytes = 0;

  priceFilter = new FormControl(0);

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map(rooms => rooms.length)
  )

  constructor(@SkipSelf() private roomsService: RoomsService, private configService: ConfigService) {}

  ngOnInit(): void {
    this.roomsService.getPhotos().subscribe(event => {
      switch (event.type) {
        case HttpEventType.Sent: {
          console.log('Request has been made!');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success!');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });

    this.stream.subscribe({
      next: value => console.log(value),
      complete: () => console.log('complete'),
      error: error => console.log(error),
    });
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterViewInit(): void {
    // this.HeaderComponent.title = 'Hotel Hilton';
    // this.HeaderComponents.forEach(header => {
    //   header.title = 'Hotel Hilton';
    // });
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms list';
  }

  selectRoom(room: RoomDetails) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room = {
      roomNumber: '103',
      roomType: 'Suite',
      amenities: 'Free Wi-Fi, Air Conditioning, TV, Mini Bar, Kitchenette',
      price: 200,
      photos: 'https://example.com/suite.jpg',
      checkinTime: new Date('2025-10-01T14:00:00'),
      checkoutTime: new Date('2025-10-02T12:00:00'),
      rating: 4.8,
    };

    this.roomsService.addRoom(room).subscribe(data => {
      this.rooms = data;
    });
  }

  editRoom() {
    const room = {
      roomNumber: '3',
      roomType: 'Suite',
      amenities: 'Free Wi-Fi, Air Conditioning, TV, Mini Bar, Kitchenette',
      price: 200,
      photos: 'https://example.com/suite.jpg',
      checkinTime: new Date('2025-10-01T14:00:00'),
      checkoutTime: new Date('2025-10-02T12:00:00'),
      rating: 4.8,
    };

    this.roomsService.editRoom(room).subscribe(data => {
      this.rooms = data;
    });
  }

  deleteRoom() {
    this.roomsService.deleteRoom('3').subscribe(data => {
      this.rooms = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
