import { FirebaseService } from 'src/common/firebase/public-api';
import { Client } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientRepository {
  constructor(private firestore: FirebaseService) {}

  private readonly collection = this.firestore.db.collection('clients');

  async findAll(userId: string): Promise<Client[]> {
    const querySnapshot = await this.collection
      .where('userId', '==', userId)
      .get();
    const clients: Client[] = [];
    querySnapshot.forEach((doc) => {
      clients.push({ id: doc.id, ...doc.data() } as Client);
    });

    return clients;
  }

  async findById(clientId: string): Promise<Client | null> {
    const clientRef = this.collection.doc(clientId);
    const clientDoc = await clientRef.get();
    if (clientDoc.exists) {
      return { id: clientDoc.id, ...clientDoc.data() } as Client;
    } else {
      throw 'Client Not found';
    }
  }

  async create(data: Client): Promise<Client> {
    const id = crypto.randomUUID();
    await this.collection.doc(id).set(data);
    return { id, ...data } as Client;
  }

  async update(id: string, data: Partial<Client>): Promise<Client | null> {
    const docRef = this.collection.doc(id);
    const docSnapshot = await docRef.get();
    if (!docSnapshot.exists) {
      return null;
    }
    await docRef.update(data);
    const updatedClient = await docRef.get();
    return { id, ...updatedClient.data() } as Client;
  }

  async delete(id: string): Promise<boolean> {
    const docRef = this.collection.doc(id);
    const docSnapshot = await docRef.get();
    if (!docSnapshot.exists) {
      return false;
    }
    await docRef.delete();
    return true;
  }
}
