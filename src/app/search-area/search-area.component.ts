import { Component } from '@angular/core';
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { LOCATIONS } from './locations';
import { Location } from './location';

@Component({
  selector: 'app-search-area',
  templateUrl: './search-area.component.html',
  styleUrl: './search-area.component.css',
})
export class SearchAreaComponent {
  faSearch = faSearch;
  faChevronDown = faChevronDown;
  isOpen = false;

  locations = LOCATIONS;

  selectedLocation: Location | null = this.locations[0];

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectLocation(location: Location): void {
    this.selectedLocation =
      this.selectedLocation === undefined ? null : location;

    this.isOpen = false;
  }
}
