import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.entity';
import { db } from '../../firestore/firestore.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';

@Injectable()
export class UserRepository {
  private readonly collection = collection(db, 'users');

  async findAll(): Promise<User[]> {
    const usersSnapshot = await getDocs(this.collection);
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

  async findById(id: string): Promise<User | null> {
    // const { exists, data } = await this.collection.doc(id).get();
    // if (!exists) {
    //   return null;
    // }
    // return { ...data(), id } as User;
    return null;
  }

  async create(data: User): Promise<User> {
    const docRef = await addDoc(this.collection, data);
    return { id: docRef.id } as User;
  }

  async update(id: string, data: Partial<User>): Promise<User | null> {
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

  async delete(id: string): Promise<boolean> {
    // const docRef = this.collection.doc(id);
    // const docSnapshot = await docRef.get();
    // if (!docSnapshot.exists) {
    //   return false;
    // }
    // await docRef.delete();
    return true;
  }
}
