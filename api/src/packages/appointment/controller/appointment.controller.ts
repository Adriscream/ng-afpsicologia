import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppointmentService } from '../service/appointment.service';
import { Appointment } from '@lib/interfaces';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  async findAll(): Promise<Appointment[]> {
    return this.appointmentService.findAll();
  }

  @Post()
  async create(@Body() appointment: Appointment): Promise<Appointment> {
    return this.appointmentService.create(appointment);
  }
}
