import { Component, OnInit, signal } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from './booking.service';
import { exhaustMap } from 'rxjs';
import { CustomValidator } from './validators/CustomValidator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: false,
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup
  get guests() {
    return this.bookingForm.get('guests') as FormArray; 
  }
  readonly panelOpenState = signal(false);

  constructor(
    private configService: ConfigService,
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const roomid = this.route.snapshot.paramMap.get('roomid');

    this.bookingForm = this.fb.group({
      roomId: new FormControl({value: roomid, disabled: true}, {validators: Validators.required}),
      guestEmail: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.email]
        }
      ],
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: [
        '',
        {updateOn: 'blur'}
      ],
      guestName: ['', [Validators.required, Validators.minLength(5), CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*')]],
      address: this.fb.group({
        addressLine1: ['', [Validators.required]],
        addressLine2: [''],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([
        this.addGuestControl(),
      ]),
      tnc: new FormControl(false, {validators: [Validators.requiredTrue]}),
    },
      {
        updateOn: 'blur',
        validators: [CustomValidator.validatedate],
    })

    this.getBookingData();

    this.bookingForm.valueChanges.pipe(
      exhaustMap(data => this.bookingService.bookRoom(data))
    ).subscribe(data => console.log(data))
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    this.bookingForm.reset({
      roomId: 2,
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    })
  }

  getBookingData() {
    this.bookingForm.patchValue({
      guestEmail: 'test@gmail.com',
      checkinDate: new Date('10-fb-2020'),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      address: {
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
      },
      guests: [],
      tnc: false,
    })
  }

  addGuest() {
    this.guests.push(
      this.addGuestControl()
    )
  }

  addGuestControl() {
    return this.fb.group({ guestName: ['', { validators: Validators.required }], age: new FormControl('')})
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }
}
