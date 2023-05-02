import { FirebaseService } from 'src/common/firebase/public-api';
import { Invoice } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InvoiceRepository {
  constructor(private firestore: FirebaseService) {}

  private readonly collection = this.firestore.db.collection('invoices');

  async findAll(): Promise<Invoice[]> {
    const invoicesSnapshot = await this.collection.get();
    const invoices: Invoice[] = [];

    invoicesSnapshot.forEach((doc) => {
      const invoice = doc.data();
      invoices.push({
        ...invoice,
        id: doc.id,
      } as Invoice);
    });

    return invoices;
  }

  async findById(_id: string): Promise<Invoice | null> {
    // const { exists, data } = await this.collection.doc(id).get();
    // if (!exists) {
    //   return null;
    // }
    // return { ...data(), id } as Invoice;
    return null;
  }

  async create(data: Invoice): Promise<Invoice> {
    const id = crypto.randomUUID();
    await this.collection.doc(id).set(data);
    return { ...data, id } as Invoice;
  }

  async update(_id: string, _data: Partial<Invoice>): Promise<Invoice | null> {
    // const docRef = this.collection.doc(id);
    // const docSnapshot = await docRef.get();
    // if (!docSnapshot.exists) {
    //   return null;
    // }
    // await docRef.update(data);
    // const updatedInvoice = await docRef.get();
    // return { id, ...updatedInvoice.data() } as Invoice;
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
