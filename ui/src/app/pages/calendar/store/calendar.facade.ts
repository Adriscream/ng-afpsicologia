import { Injectable } from '@angular/core';
import { CalendarEvent } from '@lib/interfaces';
import { Store } from '@ngrx/store';

import {
  deleteCalendarEvent,
  getCalendarEvents,
  setAll,
  setCalendarEventError,
  setEditCalendarEvent,
  updateCalendarEvents,
  upsertCalendarEvent,
} from './calendar.actions';
import {
  selectCalendarEventError,
  selectCalendarEvents,
  selectEditCalendarEvent,
} from './calendar.selectors';

@Injectable({ providedIn: 'root' })
export class CalendarEventFacade {
  calendarEvents$ = this.store.select(selectCalendarEvents);
  calendarEventError$ = this.store.select(selectCalendarEventError);
  editCalendarEvent$ = this.store.select(selectEditCalendarEvent);

  constructor(private store: Store) {}

  getCalendarEvents() {
    this.store.dispatch(getCalendarEvents());
  }

  setAll(calendarEvents: CalendarEvent[]) {
    this.store.dispatch(setAll({ calendarEvents }));
  }

  upsertCalendarEvent(calendarEvent: CalendarEvent) {
    this.store.dispatch(upsertCalendarEvent({ calendarEvent }));
  }

  updateCalendarEvents(calendarEvents: CalendarEvent[]) {
    this.store.dispatch(updateCalendarEvents({ calendarEvents }));
  }

  setEditCalendarEvent(calendarEvent: CalendarEvent) {
    this.store.dispatch(setEditCalendarEvent({ calendarEvent }));
  }

  deleteCalendarEvent(id?: string) {
    this.store.dispatch(deleteCalendarEvent({ id }));
  }

  resetEditCalendarEvent() {
    this.store.dispatch(setEditCalendarEvent({ calendarEvent: null }));
  }

  setCalendarEventError(error: any) {
    this.store.dispatch(setCalendarEventError({ error }));
  }
}
