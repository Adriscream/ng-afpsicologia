import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { CalendarEventService } from '../service/calendar-event.service';
import { CalendarEvent } from '@lib/interfaces';
import { Session, UserSession } from '@common/auth';

@Controller('calendar')
export class CalendarEventController {
  constructor(private readonly calendarEventService: CalendarEventService) {}

  @Get()
  findAll(@Session() session: UserSession): Promise<CalendarEvent[]> {
    return this.calendarEventService.findAll(session.uid);
  }

  @Post()
  create(
    @Session() session: UserSession,
    @Body() calendarEvent: CalendarEvent
  ): Promise<CalendarEvent> {
    return this.calendarEventService.upsert(calendarEvent, session);
  }

  @Delete()
  delete(@Query('id') id: string): Promise<boolean> {
    return this.calendarEventService.delete(id);
  }
}
