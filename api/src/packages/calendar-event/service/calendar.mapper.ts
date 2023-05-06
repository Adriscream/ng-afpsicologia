import { UserSession } from '@common/auth';
import { CalendarEvent } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CalendarEventMapper {
  mapToEntity(
    calendarEvent: CalendarEvent,
    { uid: userId }: UserSession
  ): CalendarEvent {
    return {
      ...calendarEvent,
      userId,
    };
  }
}
