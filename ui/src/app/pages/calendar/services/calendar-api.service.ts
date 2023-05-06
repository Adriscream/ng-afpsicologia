import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CalendarEvent } from '@lib/interfaces';

@Injectable()
export class CalendarEventApiService {
  controllerName = 'calendar';

  constructor(private http: HttpClient) {}

  getCalendarEvents() {
    return this.http.get<CalendarEvent[]>(`/${this.controllerName}`);
  }

  upsert(calendarEvent: CalendarEvent) {
    return this.http.post<CalendarEvent>(
      `/${this.controllerName}`,
      calendarEvent
    );
  }

  delete(id: string) {
    return this.http.delete<boolean>(`/${this.controllerName}`, {
      params: { id },
    });
  }
}
