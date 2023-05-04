import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { ProfessionalOfferingService } from '../service/professional-offering.service';
import { ProfessionalOffering } from '@lib/interfaces';
import { Session, UserSession } from '@common/auth';

@Controller('professional-offering')
export class ProfessionalOfferingController {
  constructor(
    private readonly professionalOfferingService: ProfessionalOfferingService
  ) {}
  @Get()
  findAll(@Session() session: UserSession): Promise<ProfessionalOffering[]> {
    return this.professionalOfferingService.findAll(session.uid);
  }

  @Post()
  create(
    @Session() session: UserSession,
    @Body() professionalOffering: ProfessionalOffering
  ): Promise<ProfessionalOffering> {
    return this.professionalOfferingService.upsert(
      professionalOffering,
      session
    );
  }

  @Delete()
  delete(@Query('id') id: string): Promise<boolean> {
    return this.professionalOfferingService.delete(id);
  }
}
