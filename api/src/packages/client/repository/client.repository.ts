import { FirebaseService } from 'src/common/firebase/public-api';
import { Client } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientRepository {
  constructor(private firestore: FirebaseService) {}

  private readonly collection = this.firestore.db.collection('clients');

  async findAll(userId: string): Promise<Client[]> {
    return this.firestore.findAll<Client>(userId, this.collection);
  }

  async findById(id: string): Promise<Client | null> {
    return this.firestore.findById<Client>(id, this.collection);
  }

  async create(data: Client): Promise<Client> {
    return this.firestore.create<Client>(data, this.collection);
  }

  async update(id: string, data: Partial<Client>): Promise<Client | null> {
    return this.firestore.update<Client>(id, data, this.collection);
  }

  async delete(id: string): Promise<boolean> {
    return this.firestore.delete(id, this.collection);
  }
}
