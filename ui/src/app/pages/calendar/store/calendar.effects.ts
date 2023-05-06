import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { CalendarEventApiService } from '../services/calendar-api.service';
import {
  confirmDeleteCalendarEvent,
  deleteCalendarEvent,
  getCalendarEvents,
  setAll,
  setCalendarEvent,
  setCalendarEventError,
  upsertCalendarEvent,
} from './calendar.actions';

@Injectable()
export class CalendarEventEffects {
  loadCalendarEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCalendarEvents),
      exhaustMap(() => this.calendarEventApiService.getCalendarEvents()),
      map((calendarEvents) => setAll({ calendarEvents })),
      catchError((error) => of(setCalendarEventError({ error })))
    )
  );

  upsertCalendarEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(upsertCalendarEvent),
      exhaustMap(({ calendarEvent }) =>
        this.calendarEventApiService.upsert(calendarEvent)
      ),
      map((calendarEvent) => setCalendarEvent({ calendarEvent })),
      catchError((error) => of(setCalendarEventError({ error })))
    )
  );

  deleteCalendarEvent$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCalendarEvent),
      exhaustMap(({ id }) =>
        this.calendarEventApiService
          .delete(id ?? '')
          .pipe(
            map((isDeleted) => confirmDeleteCalendarEvent({ id, isDeleted }))
          )
      ),
      catchError((error) => of(setCalendarEventError({ error })))
    )
  );

  constructor(
    private actions$: Actions,
    private calendarEventApiService: CalendarEventApiService
  ) {}
}
