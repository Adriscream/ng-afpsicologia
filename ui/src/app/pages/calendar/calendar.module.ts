import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AfFullCalendarModule } from '@components/full-calendar/full-calendar.module';

import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CalendarComponent,
      },
    ]),
    CommonModule,
    AfFullCalendarModule,
  ],
})
export class CalendarModule {}
