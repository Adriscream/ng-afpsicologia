import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  CalendarOptions,
  DateSelectArg,
  EventChangeArg,
  EventClickArg,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import { CalendarEventFacade } from '@pages/calendar/store/calendar.facade';
import { first, map } from 'rxjs';

import { FullCalendarEventDialogComponent } from './components/full-calendar-event-dialog/full-calendar-event-dialog.component';
import { INITIAL_EVENTS } from './event-utils';
import { FullCalendarMapper } from './services/full-calendar.mapper';

@Component({
  selector: 'af-full-calendar',
  templateUrl: './full-calendar.component.html',
  styleUrls: ['./full-calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FullCalendarComponent {
  calendarOptions: CalendarOptions = {
    themeSystem: 'bootstrap5',
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventChange: this.handleEventChange.bind(this),
    // eventAdd: this.handleDateSelect.bind(this),
    // eventChange: this.handleDateSelect.bind(this),
    // eventRemove: this.handleEventClick.bind(this),
  };
  currentEvents$ = this.calendarEventFacade.calendarEvents$.pipe(
    map((events) => events.map(this.fullCalendarMapper.fromServer))
  );

  constructor(
    private changeDetector: ChangeDetectorRef,
    private dialog: MatDialog,
    public fullCalendarMapper: FullCalendarMapper,
    public calendarEventFacade: CalendarEventFacade
  ) {}

  openForm() {
    const dialogRef = this.dialog.open(FullCalendarEventDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe(
        ({
          title,
          clientId,
          serviceId,
          paymentMethod,
          status,
          end: endStr,
          start: startStr,
        }) => {
          if (endStr && startStr) {
            this.calendarEventFacade.upsertCalendarEvent(
              this.fullCalendarMapper.toServer({
                endStr,
                startStr,
                title,
                extendedProps: {
                  clientId,
                  serviceId,
                  paymentMethod,
                  status,
                },
              } as any)
            );
          }
        }
      );
  }
  handleDateSelect(selectInfo: DateSelectArg) {
    const dialogRef = this.dialog.open(FullCalendarEventDialogComponent, {
      data: { end: selectInfo.end, start: selectInfo.start },
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe(
        ({
          title,
          clientId,
          serviceId,
          paymentMethod,
          status,
          end: endStr,
          start: startStr,
        }) => {
          const calendarApi = selectInfo.view.calendar;

          if (clientId) {
            const event = calendarApi.addEvent(selectInfo);
            if (event) {
              this.calendarEventFacade.upsertCalendarEvent(
                this.fullCalendarMapper.toServer({
                  ...selectInfo,
                  endStr,
                  startStr,
                  title,
                  extendedProps: {
                    clientId,
                    serviceId,
                    paymentMethod,
                    status,
                  },
                } as any)
              );
            }
          }
          calendarApi.unselect();
        }
      );
  }

  handleEventClick(clickInfo: EventClickArg) {
    const dialogRef = this.dialog.open(FullCalendarEventDialogComponent, {
      data: {
        end: clickInfo.event.end,
        start: clickInfo.event.start,
        canDelete: true,
        ...clickInfo.event.extendedProps,
      },
    });

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe(
        ({
          title,
          clientId,
          serviceId,
          paymentMethod,
          status,
          canDelete,
          end: endStr,
          start: startStr,
        }) => {
          if (canDelete) {
            this.calendarEventFacade.deleteCalendarEvent(clickInfo.event.id);
            clickInfo.event.remove();
          } else if (clientId) {
            this.calendarEventFacade.upsertCalendarEvent(
              this.fullCalendarMapper.toServer({
                ...clickInfo.event.toJSON(),
                endStr,
                startStr,
                title,
                extendedProps: { clientId, serviceId, paymentMethod, status },
              } as any)
            );
          }
        }
      );
  }

  handleEvents() {
    this.changeDetector.detectChanges();
  }

  handleEventChange(event: EventChangeArg) {
    this.calendarEventFacade.upsertCalendarEvent(
      this.fullCalendarMapper.toServer(event.event)
    );
  }
}
