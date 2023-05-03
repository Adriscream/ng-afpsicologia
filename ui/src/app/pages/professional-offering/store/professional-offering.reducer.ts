import { resetState } from '@app/common/store/global.actions';
import { ProfessionalOffering } from '@lib/interfaces';
import { Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  confirmDeleteProfessionalOffering,
  setAll,
  setEditProfessionalOffering,
  setProfessionalOffering,
  setProfessionalOfferingError,
  updateProfessionalOfferings,
} from './professional-offering.actions';
import { adapter } from './professional-offering.adapter';
import { ProfessionalOfferingState } from './professional-offering.state';

export const professionalOfferingKey = 'professional-offering';

export const initialState: ProfessionalOfferingState = adapter.getInitialState({
  error: null,
});

export const professionalOfferingReducer = createReducer(
  initialState,
  on(resetState, () => initialState),
  on(setAll, (state, { professionalOfferings }) => {
    return adapter.setAll(professionalOfferings, state);
  }),
  on(setProfessionalOffering, (state, { professionalOffering }) => {
    return adapter.upsertOne(professionalOffering, state);
  }),
  on(updateProfessionalOfferings, (state, { professionalOfferings }) => {
    return adapter.updateMany(
      professionalOfferings.map(
        ({ id, ...professionalOffering }) =>
          ({
            id,
            changes: professionalOffering,
          } as Update<ProfessionalOffering>)
      ),
      state
    );
  }),
  on(
    confirmDeleteProfessionalOffering,
    (state, { id = '', isDeleted }): ProfessionalOfferingState => {
      if (!isDeleted) return state;
      const newState = adapter.removeOne(id, state);
      return newState;
    }
  ),
  on(
    setEditProfessionalOffering,
    (state, { professionalOffering }): ProfessionalOfferingState => ({
      ...state,
      editProfessionalOffering: professionalOffering,
    })
  ),
  on(
    setProfessionalOfferingError,
    (state, { error }): ProfessionalOfferingState => ({ ...state, error })
  )
);
