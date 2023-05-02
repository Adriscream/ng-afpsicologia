import { Module } from '@nestjs/common';
import { ProfessionalOfferingController } from './controller/professional-offering.controller';
import { ProfessionalOfferingService } from './service/professional-offering.service';
import { ProfessionalOfferingRepository } from './repository/professional-offering.repository';
import { FirebaseModule } from 'src/common/firebase/public-api';

@Module({
  imports: [FirebaseModule],
  controllers: [ProfessionalOfferingController],
  providers: [ProfessionalOfferingService, ProfessionalOfferingRepository],
})
export class ProfessionalOfferingModule {}
