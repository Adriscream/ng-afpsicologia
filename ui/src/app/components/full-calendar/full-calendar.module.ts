import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ConfirmDialogModule } from '@components/confirm-dialog/confirm-dialog.module';
import { FloatButtonModule } from '@components/float-button/float-button.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { FullCalendarEventDialogComponent } from './components/full-calendar-event-dialog/full-calendar-event-dialog.component';
import { FullCalendarComponent } from './full-calendar.component';
import { FullCalendarMapper } from './services/full-calendar.mapper';

@NgModule({
  declarations: [FullCalendarComponent, FullCalendarEventDialogComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FloatButtonModule,
  ],
  exports: [FullCalendarComponent, FullCalendarEventDialogComponent],
  providers: [FullCalendarMapper],
})
export class AfFullCalendarModule {}
