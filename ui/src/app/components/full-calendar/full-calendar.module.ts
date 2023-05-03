import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';

import { FullCalendarComponent } from './full-calendar.component';

@NgModule({
  declarations: [FullCalendarComponent],
  imports: [CommonModule, FullCalendarModule],
  exports: [FullCalendarComponent],
})
export class AfFullCalendarModule {}
