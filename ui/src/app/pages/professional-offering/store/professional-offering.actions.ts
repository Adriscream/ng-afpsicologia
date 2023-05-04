import { ProfessionalOffering } from '@lib/interfaces';
import { createAction, props } from '@ngrx/store';

export const getProfessionalOfferings = createAction(
  '[ProfessionalOffering] GetProfessionalOfferings'
);

export const setAll = createAction(
  '[ProfessionalOffering] SetAll',
  props<{ professionalOfferings: ProfessionalOffering[] }>()
);

export const upsertProfessionalOffering = createAction(
  '[ProfessionalOffering] UpsertProfessionalOffering',
  props<{ professionalOffering: ProfessionalOffering }>()
);

export const setProfessionalOffering = createAction(
  '[ProfessionalOffering] SetProfessionalOffering',
  props<{ professionalOffering: ProfessionalOffering }>()
);

export const updateProfessionalOfferings = createAction(
  '[ProfessionalOffering] UpdateProfessionalOfferings',
  props<{ professionalOfferings: ProfessionalOffering[] }>()
);

export const deleteProfessionalOffering = createAction(
  '[ProfessionalOffering] DeleteProfessionalOffering',
  props<{ id?: string }>()
);

export const confirmDeleteProfessionalOffering = createAction(
  '[ProfessionalOffering] ConfirmDeleteProfessionalOffering',
  props<{ id?: string; isDeleted: boolean }>()
);

export const setEditProfessionalOffering = createAction(
  '[ProfessionalOffering] SetEditProfessionalOffering',
  props<{ professionalOffering?: ProfessionalOffering | null }>()
);

export const setProfessionalOfferingError = createAction(
  '[ProfessionalOffering] ProfessionalOfferingError',
  props<{ error?: any }>()
);
