import { ProfessionalOffering } from '@lib/interfaces';
import { EntityState } from '@ngrx/entity';

export interface ProfessionalOfferingState
  extends EntityState<ProfessionalOffering> {
  editProfessionalOffering?: ProfessionalOffering | null;
  error: any;
}
