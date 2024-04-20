import { Component } from '@angular/core';
import {
  faUserGroup,
  faScrewdriverWrench,
  faHouse,
  faTag,
  faSuitcase,
  faHandshake,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { TOPICS } from './topics';
import { Topic } from './topic';

@Component({
  selector: 'app-topics-bar',
  templateUrl: './topics-bar.component.html',
  styleUrl: './topics-bar.component.css',
})
export class TopicsBarComponent {
  faUserGroup = faUserGroup;
  faScrewdriverWrench = faScrewdriverWrench;
  faHouse = faHouse;
  faTag = faTag;
  faSuitcase = faSuitcase;
  faHandshake = faHandshake;
  faFile = faFile;

  topics = TOPICS;

  selectedTopic: Topic | null = null;

  // simply selects topics. not used for anything, but just in case we
  // want to do something more with the selected topic
  selectTopic(topic: Topic): void {
    this.selectedTopic = this.selectedTopic === topic ? null : topic;
  }
}
