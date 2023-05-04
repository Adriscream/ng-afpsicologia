import { Injectable } from '@nestjs/common';
import { AppointmentRepository } from '../repository/appointment.repository';
import { Appointment } from '@lib/interfaces';

@Injectable()
export class AppointmentService {
  constructor(private appointmentRepository: AppointmentRepository) {}

  async findAll(): Promise<Appointment[]> {
    const appointments = await this.appointmentRepository.findAll();
    return appointments;
  }

  async findById(id: string): Promise<Appointment | null> {
    const appointment = await this.appointmentRepository.findById(id);
    return appointment;
  }

  async create(data: Appointment): Promise<Appointment> {
    const appointment = await this.appointmentRepository.create(data);
    return appointment;
  }

  async update(
    id: string,
    data: Partial<Appointment>
  ): Promise<Appointment | null> {
    const appointment = await this.appointmentRepository.update(id, data);
    return appointment;
  }

  async delete(id: string): Promise<boolean> {
    const isDeleted = await this.appointmentRepository.delete(id);
    return isDeleted;
  }
}
