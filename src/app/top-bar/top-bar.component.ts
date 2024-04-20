import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCheckSquare,
  faUser,
  faChevronRight,
  faGlobe,
  faRightToBracket,
  faPeace,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor(private router: Router) {}
  faCheckSquare = faCheckSquare;
  faUser = faUser;
  faChevronRight = faChevronRight;
  faGlobe = faGlobe;
  faRightToBracket = faRightToBracket;
  faPeace = faPeace;

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  navigateToSignUp() {
    this.router.navigate(['/signup']);
  }

  navigateToPost() {
    this.router.navigate(['/post']);
  }
}
