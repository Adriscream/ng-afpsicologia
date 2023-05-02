import { FirebaseService } from 'src/common/firebase/public-api';
import { ProfessionalOffering } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfessionalOfferingRepository {
  constructor(private firestore: FirebaseService) {}

  private readonly collection = this.firestore.db.collection(
    'professionalOfferings'
  );

  async findAll(): Promise<ProfessionalOffering[]> {
    const professionalOfferingsSnapshot = await this.collection.get();
    const professionalOfferings: ProfessionalOffering[] = [];

    professionalOfferingsSnapshot.forEach((doc) => {
      const professionalOffering = doc.data();
      professionalOfferings.push({
        ...professionalOffering,
        id: doc.id,
      } as ProfessionalOffering);
    });

    return professionalOfferings;
  }

  async findById(_id: string): Promise<ProfessionalOffering | null> {
    // const { exists, data } = await this.collection.doc(id).get();
    // if (!exists) {
    //   return null;
    // }
    // return { ...data(), id } as ProfessionalOffering;
    return null;
  }

  async create(data: ProfessionalOffering): Promise<ProfessionalOffering> {
    const id = crypto.randomUUID();
    await this.collection.doc(id).set(data);
    return { ...data, id } as ProfessionalOffering;
  }

  async update(
    _id: string,
    _data: Partial<ProfessionalOffering>
  ): Promise<ProfessionalOffering | null> {
    // const docRef = this.collection.doc(id);
    // const docSnapshot = await docRef.get();
    // if (!docSnapshot.exists) {
    //   return null;
    // }
    // await docRef.update(data);
    // const updatedProfessionalOffering = await docRef.get();
    // return { id, ...updatedProfessionalOffering.data() } as ProfessionalOffering;
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
