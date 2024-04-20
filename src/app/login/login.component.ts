import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from './users';
import { User } from './user';

import { faPeace } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  faPeace = faPeace;
  users = USERS;

  constructor(private router: Router) {}

  // gets initials of user. unused and can be removed
  getInitials(user: User): string {
    let splitName = user.name.split(' ');
    let initials = `${splitName[0][0]}.${splitName[1][0]}`;
    return initials;
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }
}
