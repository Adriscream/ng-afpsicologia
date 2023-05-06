import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CalendarEventApiService } from '../services/calendar-api.service';
import { CalendarEventEffects } from './calendar.effects';
import { CalendarEventFacade } from './calendar.facade';
import { calendarEventKey, calendarEventReducer } from './calendar.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(calendarEventKey, calendarEventReducer),
    EffectsModule.forFeature(CalendarEventEffects),
  ],
  providers: [CalendarEventApiService, CalendarEventFacade],
})
export class CalendarEventStoreModule {}
