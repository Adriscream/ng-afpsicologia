import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProfessionalOfferingApiService } from '../services/professional-offering-api.service';
import { ProfessionalOfferingEffects } from './professional-offering.effects';
import { ProfessionalOfferingFacade } from './professional-offering.facade';
import {
  professionalOfferingKey,
  professionalOfferingReducer,
} from './professional-offering.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(
      professionalOfferingKey,
      professionalOfferingReducer
    ),
    EffectsModule.forFeature(ProfessionalOfferingEffects),
  ],
  providers: [ProfessionalOfferingApiService, ProfessionalOfferingFacade],
})
export class ProfessionalOfferingStoreModule {}
