import { Injectable } from '@angular/core';
import { EventApi } from '@fullcalendar/core';
import { CalendarEvent } from '@lib/interfaces';

@Injectable()
export class FullCalendarMapper {
  fromServer({
    id,
    start,
    end,
    allDay,
    title,
    clientId,
    paymentMethod,
    serviceId,
    status,
    userId,
  }: CalendarEvent): any {
    return {
      id,
      start,
      end,
      allDay,
      title,
      extendedProps: {
        clientId,
        serviceId,
        userId,
        paymentMethod,
        status,
      },
    };
  }

  toServer({
    id,
    startStr,
    start,
    endStr,
    end,
    allDay,
    title,
    extendedProps: {
      clientId,
      serviceId,
      userId = null,
      paymentMethod,
      status,
    },
  }: EventApi): CalendarEvent {
    debugger;
    return {
      id,
      start: startStr ?? start,
      end: endStr ?? end,
      allDay,
      title,
      clientId,
      serviceId,
      userId,
      paymentMethod,
      status,
    };
  }
}
