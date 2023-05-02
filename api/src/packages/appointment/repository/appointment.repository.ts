import { FirebaseService } from 'src/common/firebase/public-api';
import { Appointment } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppointmentRepository {
  constructor(private firestore: FirebaseService) {}

  private readonly collection = this.firestore.db.collection('appointments');

  async findAll(): Promise<Appointment[]> {
    const appointmentsSnapshot = await this.collection.get();
    const appointments: Appointment[] = [];

    appointmentsSnapshot.forEach((doc) => {
      const appointment = doc.data();
      appointments.push({
        ...appointment,
        id: doc.id,
      } as Appointment);
    });

    return appointments;
  }

  async findById(_id: string): Promise<Appointment | null> {
    return null;
  }

  async create(data: Appointment): Promise<Appointment> {
    const id = crypto.randomUUID();
    await this.collection.doc(id).set(data);
    return { ...data, id } as Appointment;
  }

  async update(
    _id: string,
    _data: Partial<Appointment>
  ): Promise<Appointment | null> {
    return null;
  }

  async delete(_id: string): Promise<boolean> {
    return true;
  }
}
