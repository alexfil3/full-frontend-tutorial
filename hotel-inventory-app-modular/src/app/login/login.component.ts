import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = ''
  password: string = ''

  constructor(private router: Router) {}

  login() {
    console.log(this)
    if (this.email === 'admin@gmail.com' && this.password === 'admin') {
      this.router.navigate(['rooms/', 'add']);
    }
  }
}
