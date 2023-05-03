import { ProfessionalOffering } from '@lib/interfaces';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<ProfessionalOffering> =
  createEntityAdapter<ProfessionalOffering>();
