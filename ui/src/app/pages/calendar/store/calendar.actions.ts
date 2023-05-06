import { CalendarEvent } from '@lib/interfaces';
import { createAction, props } from '@ngrx/store';

export const getCalendarEvents = createAction(
  '[CalendarEvent] GetCalendarEvents'
);

export const setAll = createAction(
  '[CalendarEvent] SetAll',
  props<{ calendarEvents: CalendarEvent[] }>()
);

export const upsertCalendarEvent = createAction(
  '[CalendarEvent] UpsertCalendarEvent',
  props<{ calendarEvent: CalendarEvent }>()
);

export const setCalendarEvent = createAction(
  '[CalendarEvent] SetCalendarEvent',
  props<{ calendarEvent: CalendarEvent }>()
);

export const updateCalendarEvents = createAction(
  '[CalendarEvent] UpdateCalendarEvents',
  props<{ calendarEvents: CalendarEvent[] }>()
);

export const deleteCalendarEvent = createAction(
  '[CalendarEvent] DeleteCalendarEvent',
  props<{ id?: string }>()
);

export const confirmDeleteCalendarEvent = createAction(
  '[CalendarEvent] ConfirmDeleteCalendarEvent',
  props<{ id?: string; isDeleted: boolean }>()
);

export const setEditCalendarEvent = createAction(
  '[CalendarEvent] SetEditCalendarEvent',
  props<{ calendarEvent?: CalendarEvent | null }>()
);

export const setCalendarEventError = createAction(
  '[CalendarEvent] CalendarEventError',
  props<{ error?: any }>()
);
