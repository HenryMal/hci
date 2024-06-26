import { Component } from '@angular/core';
import { CATEGORIES } from './categories';
import { POSTS } from './posts';
import { Category } from './category';
import { Post } from './post';
import { faCircle, faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrl: './discussion.component.css',
})
export class DiscussionComponent {
  faCircle = faCircle;
  faBookmark = faBookmark;

  categories = CATEGORIES;
  posts = POSTS;

  // name is self explanatory. simply finds the category by ID
  findCategoryName(categoryID: number): String | undefined {
    let category = this.categories.find(
      (category) => category.id === categoryID
    );

    return category?.name;
  }

  // return initials of user for compactness
  getInitials(post: Post): string {
    let splitName = post.author.split(' ');
    let initials = `${splitName[0][0]}.${splitName[1][0]}`;
    return initials;
  }

  // returns the date as a string and formatted
  getDateString(post: Post): string {
    return `${post.postDate.toLocaleString('default', {
      month: 'long',
    })} ${post.postDate.getDate()}, ${post.postDate.getFullYear()}`;
  }
}
