import { Injectable } from '@nestjs/common';
import { ProfessionalOfferingRepository } from '../repository/professional-offering.repository';
import { ProfessionalOffering } from '@lib/interfaces';

@Injectable()
export class ProfessionalOfferingService {
  constructor(
    private professionalOfferingRepository: ProfessionalOfferingRepository
  ) {}

  async findAll(): Promise<ProfessionalOffering[]> {
    const professionalOfferings =
      await this.professionalOfferingRepository.findAll();
    return professionalOfferings;
  }

  async findById(id: string): Promise<ProfessionalOffering | null> {
    const professionalOffering =
      await this.professionalOfferingRepository.findById(id);
    return professionalOffering;
  }

  async create(data: ProfessionalOffering): Promise<ProfessionalOffering> {
    const professionalOffering =
      await this.professionalOfferingRepository.create(data);
    return professionalOffering;
  }

  async update(
    id: string,
    data: Partial<ProfessionalOffering>
  ): Promise<ProfessionalOffering | null> {
    const professionalOffering =
      await this.professionalOfferingRepository.update(id, data);
    return professionalOffering;
  }

  async delete(id: string): Promise<boolean> {
    const isDeleted = await this.professionalOfferingRepository.delete(id);
    return isDeleted;
  }
}
