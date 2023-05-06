import { resetState } from '@app/common/store/global.actions';
import { CalendarEvent } from '@lib/interfaces';
import { Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  confirmDeleteCalendarEvent,
  setAll,
  setCalendarEvent,
  setCalendarEventError,
  setEditCalendarEvent,
  updateCalendarEvents,
} from './calendar.actions';
import { adapter } from './calendar.adapter';
import { CalendarEventState } from './calendar.state';

export const calendarEventKey = 'calendar';

export const initialState: CalendarEventState = adapter.getInitialState({
  error: null,
});

export const calendarEventReducer = createReducer(
  initialState,
  on(resetState, () => initialState),
  on(setAll, (state, { calendarEvents }) => {
    return adapter.setAll(calendarEvents, state);
  }),
  on(setCalendarEvent, (state, { calendarEvent }) => {
    return adapter.upsertOne(calendarEvent, state);
  }),
  on(updateCalendarEvents, (state, { calendarEvents }) => {
    return adapter.updateMany(
      calendarEvents.map(
        ({ id, ...calendarEvent }) =>
          ({ id, changes: calendarEvent } as Update<CalendarEvent>)
      ),
      state
    );
  }),
  on(
    confirmDeleteCalendarEvent,
    (state, { id = '', isDeleted }): CalendarEventState => {
      if (!isDeleted) return state;
      const newState = adapter.removeOne(id, state);
      return newState;
    }
  ),
  on(
    setEditCalendarEvent,
    (state, { calendarEvent }): CalendarEventState => ({
      ...state,
      editCalendarEvent: calendarEvent,
    })
  ),
  on(
    setCalendarEventError,
    (state, { error }): CalendarEventState => ({ ...state, error })
  )
);
