import { Module } from '@nestjs/common';
import { ProfessionalOfferingController } from './controller/professional-offering.controller';
import { ProfessionalOfferingService } from './service/professional-offering.service';
import { ProfessionalOfferingRepository } from './repository/professional-offering.repository';
import { FirebaseModule } from 'src/common/firebase/public-api';
import { ProfessionalOfferingMapper } from './service/professional-offering.mapper';

@Module({
  imports: [FirebaseModule],
  controllers: [ProfessionalOfferingController],
  providers: [
    ProfessionalOfferingService,
    ProfessionalOfferingRepository,
    ProfessionalOfferingMapper,
  ],
})
export class ProfessionalOfferingModule {}
