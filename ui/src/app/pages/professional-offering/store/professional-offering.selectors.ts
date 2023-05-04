import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter } from './professional-offering.adapter';
import { professionalOfferingKey } from './professional-offering.reducer';
import { ProfessionalOfferingState } from './professional-offering.state';

const { selectAll } = adapter.getSelectors();

export const selectProfessionalOfferingState =
  createFeatureSelector<ProfessionalOfferingState>(professionalOfferingKey);

export const selectProfessionalOfferings = createSelector(
  selectProfessionalOfferingState,
  selectAll
);

export const selectEditProfessionalOffering = createSelector(
  selectProfessionalOfferingState,
  ({ editProfessionalOffering }) => editProfessionalOffering
);

export const selectProfessionalOfferingError = createSelector(
  selectProfessionalOfferingState,
  ({ error }) => error
);
