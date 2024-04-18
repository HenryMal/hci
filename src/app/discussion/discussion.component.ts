import { Component } from '@angular/core';
import { CATEGORIES } from './categories';
import { Category } from './category';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.css'
})
export class DiscussionComponent {

  faCircle = faCircle;

  categories = CATEGORIES;

  findCategoryName(categoryID: number): Category | undefined {
    return this.categories.find(category => category.id === categoryID);
  }

}
