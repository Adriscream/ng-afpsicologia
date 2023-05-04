import { Module } from '@nestjs/common';
import { AppointmentController } from './controller/appointment.controller';
import { AppointmentService } from './service/appointment.service';
import { AppointmentRepository } from './repository/appointment.repository';
import { FirebaseModule } from 'src/common/firebase/public-api';

@Module({
  imports: [FirebaseModule],
  controllers: [AppointmentController],
  providers: [AppointmentService, AppointmentRepository],
})
export class AppointmentModule {}
