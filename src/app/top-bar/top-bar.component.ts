import { Component } from '@angular/core';
import { faCheckSquare, faUser, faChevronRight, faGlobe, faRightToBracket, faPeace } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  faCheckSquare = faCheckSquare;
  faUser = faUser;
  faChevronRight = faChevronRight;
  faGlobe = faGlobe;
  faRightToBracket = faRightToBracket;
  faPeace = faPeace;
}
