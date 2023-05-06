import { FirebaseService } from 'src/common/firebase/public-api';
import { ProfessionalOffering } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfessionalOfferingRepository {
  constructor(private firestore: FirebaseService) {}

  private readonly collection = this.firestore.db.collection(
    'professional-offerings'
  );

  async findAll(userId: string): Promise<ProfessionalOffering[]> {
    return this.firestore.findAll<ProfessionalOffering>(
      userId,
      this.collection
    );
  }

  async findById(id: string): Promise<ProfessionalOffering | null> {
    return this.firestore.findById<ProfessionalOffering>(id, this.collection);
  }

  async create(data: ProfessionalOffering): Promise<ProfessionalOffering> {
    return this.firestore.create<ProfessionalOffering>(data, this.collection);
  }

  async update(
    id: string,
    data: Partial<ProfessionalOffering>
  ): Promise<ProfessionalOffering | null> {
    return this.firestore.update<ProfessionalOffering>(
      id,
      data,
      this.collection
    );
  }

  async delete(id: string): Promise<boolean> {
    return this.firestore.delete(id, this.collection);
  }
}
