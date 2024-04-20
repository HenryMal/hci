import { Component } from '@angular/core';
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPeace } from '@fortawesome/free-solid-svg-icons';
import { SECTIONS } from './sections';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  faSquareFacebook = faSquareFacebook;
  faSquareTwitter = faSquareTwitter;
  faSquareInstagram = faSquareInstagram;
  faPeace = faPeace;

  sections = SECTIONS;
}
