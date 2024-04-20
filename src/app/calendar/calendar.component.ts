import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { Event } from './event';
import { EVENTS } from './events';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  weeks: Date[][] = [];
  currentMonth: Date = new Date();
  today: Date = new Date();
  selectedDate: Date | null = null;
  eventsForSelectedDate: Event[] = [];
  events = EVENTS;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faStar = faStar;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.buildCalendar();
    this.cdr.detectChanges();
  }

  // makes the calender
  buildCalendar(): void {
    this.weeks = [];
    const startDay = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth(),
      1
    );
    const endDay = new Date(startDay.getFullYear(), startDay.getMonth() + 1, 0);

    const startDate = this.startOfWeek(startDay);
    const endDate = this.endOfWeek(endDay);

    const date = new Date(startDate);
    while (date <= endDate) {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      this.weeks.push(week);
    }
  }

  // selects date and events tied with that date
  selectDate(date: Date): void {
    this.selectedDate = date;
    this.eventsForSelectedDate = this.events.filter((event) => {
      return event.happeningDate.toDateString() === date.toDateString();
    });
  }

  // this is so we can highlight today's date
  isToday(date: Date): boolean {
    return (
      date.getDate() === this.today.getDate() &&
      date.getMonth() === this.today.getMonth() &&
      date.getFullYear() === this.today.getFullYear()
    );
  }

  // this is so we can highlight the user's selecte date
  isSelected(date: Date): boolean {
    return (
      !!this.selectedDate &&
      date.getDate() === this.selectedDate.getDate() &&
      date.getMonth() === this.selectedDate.getMonth() &&
      date.getFullYear() === this.selectedDate.getFullYear()
    );
  }

  // calculation for start of week
  startOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 0);
    return new Date(date.setDate(diff));
  }

  // calculation for end of week
  endOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? 0 : 7);
    return new Date(date.setDate(diff));
  }

  // simply gets next month along with its dates
  nextMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() + 1
    );
    this.buildCalendar();
  }

  // gets the previous month along with its date
  previousMonth(): void {
    this.currentMonth = new Date(
      this.currentMonth.getFullYear(),
      this.currentMonth.getMonth() - 1
    );
    this.buildCalendar();
  }
}
