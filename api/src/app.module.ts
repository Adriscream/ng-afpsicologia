import { Module } from '@nestjs/common';
import { UserModule } from './packages/user/user.module';
import { InvoiceModule } from '@api/invoice/invoice.module';
import { ClientModule } from '@api/client/client.module';
import { CalendarEventModule } from '@api/calendar-event/calendar-event.module';
import { ProfessionalOfferingModule } from '@api/professional-offering/professional-offering.module';
import { AuthModule } from '@api/auth/src/auth.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    InvoiceModule,
    ClientModule,
    CalendarEventModule,
    ProfessionalOfferingModule,
  ],
})
export class AppModule {}
