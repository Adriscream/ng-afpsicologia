import { CalendarEvent } from '@lib/interfaces';
import { EntityState } from '@ngrx/entity';

export interface CalendarEventState extends EntityState<CalendarEvent> {
  editCalendarEvent?: CalendarEvent | null;
  error: any;
}
