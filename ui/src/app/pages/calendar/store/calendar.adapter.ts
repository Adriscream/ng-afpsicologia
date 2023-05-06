import { CalendarEvent } from '@lib/interfaces';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<CalendarEvent> =
  createEntityAdapter<CalendarEvent>();
