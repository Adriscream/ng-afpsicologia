import { FirebaseService } from 'src/common/firebase/public-api';
import { CalendarEvent } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CalendarEventRepository {
  constructor(private firestore: FirebaseService) {}

  private readonly collection = this.firestore.db.collection('calendar-events');

  async findAll(userId: string): Promise<CalendarEvent[]> {
    return this.firestore.findAll<CalendarEvent>(userId, this.collection);
  }

  async findById(id: string): Promise<CalendarEvent | null> {
    return this.firestore.findById<CalendarEvent>(id, this.collection);
  }

  async create(data: CalendarEvent): Promise<CalendarEvent> {
    return this.firestore.create<CalendarEvent>(data, this.collection);
  }

  async update(
    id: string,
    data: Partial<CalendarEvent>
  ): Promise<CalendarEvent | null> {
    return this.firestore.update<CalendarEvent>(id, data, this.collection);
  }

  async delete(id: string): Promise<boolean> {
    return this.firestore.delete(id, this.collection);
  }
}
