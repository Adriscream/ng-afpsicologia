import { UserSession } from '@common/auth';
import { ProfessionalOffering } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfessionalOfferingMapper {
  mapToEntity(
    professionalOffering: ProfessionalOffering,
    { uid: userId }: UserSession
  ): ProfessionalOffering {
    return {
      ...professionalOffering,
      userId,
    };
  }
}
