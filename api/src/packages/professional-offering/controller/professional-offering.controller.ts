import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfessionalOfferingService } from '../service/professional-offering.service';
import { ProfessionalOffering } from '@lib/interfaces';

@Controller('professional-offering')
export class ProfessionalOfferingController {
  constructor(
    private readonly professionalOfferingService: ProfessionalOfferingService
  ) {}

  @Get()
  findAll(): Promise<ProfessionalOffering[]> {
    return this.professionalOfferingService.findAll();
  }

  @Post()
  create(
    @Body() professionalOffering: ProfessionalOffering
  ): Promise<ProfessionalOffering> {
    return this.professionalOfferingService.create(professionalOffering);
  }
}
