import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter } from './calendar.adapter';
import { calendarEventKey } from './calendar.reducer';
import { CalendarEventState } from './calendar.state';

const { selectAll } = adapter.getSelectors();

export const selectCalendarEventState =
  createFeatureSelector<CalendarEventState>(calendarEventKey);

export const selectCalendarEvents = createSelector(
  selectCalendarEventState,
  selectAll
);

export const selectEditCalendarEvent = createSelector(
  selectCalendarEventState,
  ({ editCalendarEvent }) => editCalendarEvent
);

export const selectCalendarEventError = createSelector(
  selectCalendarEventState,
  ({ error }) => error
);
