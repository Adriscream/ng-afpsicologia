import { Module } from '@nestjs/common';
import { CalendarEventController } from './controller/calendar-event.controller';
import { CalendarEventService } from './service/calendar-event.service';
import { CalendarEventRepository } from './repository/calendar-event.repository';
import { FirebaseModule } from 'src/common/firebase/public-api';
import { CalendarEventMapper } from './service/calendar.mapper';

@Module({
  imports: [FirebaseModule],
  controllers: [CalendarEventController],
  providers: [
    CalendarEventService,
    CalendarEventMapper,
    CalendarEventRepository,
  ],
})
export class CalendarEventModule {}
