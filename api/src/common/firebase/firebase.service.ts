import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { cert, initializeApp } from 'firebase-admin/app';
import {
  CollectionReference,
  DocumentData,
  Firestore,
  getFirestore,
} from 'firebase-admin/firestore';
import { Auth, getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseService {
  auth: Auth;
  db: Firestore;

  constructor(private configService: ConfigService) {
    const privateKey = this.configService
      .get('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n');

    const firebaseConfig = {
      credential: cert({
        projectId: this.configService.get('FIREBASE_PROJECT_ID'),
        privateKey,
        clientEmail: this.configService.get('FIREBASE_CLIENT_EMAIL'),
      }),
    };

    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }

  async findAll<T>(
    userId: string,
    collection: CollectionReference<DocumentData>
  ): Promise<T[]> {
    const querySnapshot = await collection.where('userId', '==', userId).get();
    const items: T[] = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() } as T);
    });

    return items;
  }

  async findById<T>(
    itemId: string,
    collection: CollectionReference<DocumentData>
  ): Promise<T | null> {
    const itemDoc = await collection.doc(itemId).get();
    if (itemDoc.exists) {
      return { id: itemDoc.id, ...itemDoc.data() } as T;
    } else {
      throw 'Doc Not found';
    }
  }

  async create<T>(
    data: T,
    collection: CollectionReference<DocumentData>
  ): Promise<T> {
    const id = crypto.randomUUID();
    await collection.doc(id).set(data as any);
    return { id, ...data } as T;
  }

  async update<T>(
    id: string,
    data: Partial<T>,
    collection: CollectionReference<DocumentData>
  ): Promise<T | null> {
    const itemRef = collection.doc(id);
    const itemDoc = await itemRef.get();
    if (!itemDoc.exists) {
      return null;
    }
    await itemRef.update(data);
    const updatedItem = await itemRef.get();
    return { id, ...updatedItem.data() } as T;
  }

  async delete(
    id: string,
    collection: CollectionReference<DocumentData>
  ): Promise<boolean> {
    const itemRef = collection.doc(id);
    const itemDoc = await itemRef.get();
    if (!itemDoc.exists) {
      return false;
    }
    await itemRef.delete();
    return true;
  }
}
