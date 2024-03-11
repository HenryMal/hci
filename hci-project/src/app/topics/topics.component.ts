import { Component } from '@angular/core';
import { TOPICS } from './topics';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrl: './topics.component.css',

})
export class TopicsComponent {  
  topics = TOPICS;
}
