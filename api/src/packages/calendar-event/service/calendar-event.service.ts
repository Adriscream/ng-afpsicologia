import { Injectable } from '@nestjs/common';
import { CalendarEventRepository } from '../repository/calendar-event.repository';
import { CalendarEvent } from '@lib/interfaces';
import { UserSession } from '@common/auth';
import { CalendarEventMapper } from './calendar.mapper';

@Injectable()
export class CalendarEventService {
  constructor(
    private calendarEventRepository: CalendarEventRepository,
    private calendarEventMapper: CalendarEventMapper
  ) {}

  findAll(userId: string): Promise<CalendarEvent[]> {
    return this.calendarEventRepository.findAll(userId);
  }

  findById(id: string): Promise<CalendarEvent | null> {
    return this.calendarEventRepository.findById(id);
  }

  async upsert(
    data: CalendarEvent,
    session: UserSession
  ): Promise<CalendarEvent> {
    const calendarEvent = this.calendarEventMapper.mapToEntity(data, session);
    if (calendarEvent.id) {
      const updatedCalendarEvent = await this.calendarEventRepository.update(
        calendarEvent.id,
        data
      );
      if (updatedCalendarEvent) {
        return updatedCalendarEvent;
      }
    }
    return this.calendarEventRepository.create(calendarEvent);
  }

  delete(id: string): Promise<boolean> {
    return this.calendarEventRepository.delete(id);
  }
}
