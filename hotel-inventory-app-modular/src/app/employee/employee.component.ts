import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  providers: [RoomsService],
})
export class EmployeeComponent implements OnInit {
  empName: string = 'John';

  constructor(private roomsService: RoomsService) {}

  ngOnInit(): void {
      
  }
}
