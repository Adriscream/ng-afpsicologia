import { FirebaseService } from 'src/common/firebase/public-api';
import { User } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(private firestore: FirebaseService) {}

  private readonly collection = this.firestore.db.collection('users');

  async findAll(): Promise<User[]> {
    const usersSnapshot = await this.collection.get();
    const users: User[] = [];

    usersSnapshot.forEach((doc) => {
      const user = doc.data();
      users.push({
        ...user,
        id: doc.id,
      } as User);
    });

    return users;
  }

  async findById(_id: string): Promise<User | null> {
    // const { exists, data } = await this.collection.doc(id).get();
    // if (!exists) {
    //   return null;
    // }
    // return { ...data(), id } as User;
    return null;
  }

  async create(data: User): Promise<User> {
    const id = crypto.randomUUID();
    await this.collection.doc(id).set(data);
    return { ...data, id } as User;
  }

  async update(_id: string, _data: Partial<User>): Promise<User | null> {
    // const docRef = this.collection.doc(id);
    // const docSnapshot = await docRef.get();
    // if (!docSnapshot.exists) {
    //   return null;
    // }
    // await docRef.update(data);
    // const updatedUser = await docRef.get();
    // return { id, ...updatedUser.data() } as User;
    return null;
  }

  async delete(_id: string): Promise<boolean> {
    // const docRef = this.collection.doc(id);
    // const docSnapshot = await docRef.get();
    // if (!docSnapshot.exists) {
    //   return false;
    // }
    // await docRef.delete();
    return true;
  }
}
