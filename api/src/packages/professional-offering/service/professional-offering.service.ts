import { Injectable } from '@nestjs/common';
import { ProfessionalOfferingRepository } from '../repository/professional-offering.repository';
import { ProfessionalOffering } from '@lib/interfaces';
import { UserSession } from '@common/auth';
import { ProfessionalOfferingMapper } from './professional-offering.mapper';

@Injectable()
export class ProfessionalOfferingService {
  constructor(
    private professionalOfferingRepository: ProfessionalOfferingRepository,
    private professionalOfferingMapper: ProfessionalOfferingMapper
  ) {}

  findAll(userId: string): Promise<ProfessionalOffering[]> {
    return this.professionalOfferingRepository.findAll(userId);
  }

  findById(id: string): Promise<ProfessionalOffering | null> {
    return this.professionalOfferingRepository.findById(id);
  }

  async upsert(
    data: ProfessionalOffering,
    session: UserSession
  ): Promise<ProfessionalOffering> {
    const professionalOffering = this.professionalOfferingMapper.mapToEntity(
      data,
      session
    );
    if (professionalOffering.id) {
      const updatedClient = await this.professionalOfferingRepository.update(
        professionalOffering.id,
        data
      );
      if (updatedClient) {
        return updatedClient;
      }
    }
    return this.professionalOfferingRepository.create(professionalOffering);
  }

  delete(id: string): Promise<boolean> {
    return this.professionalOfferingRepository.delete(id);
  }
}
