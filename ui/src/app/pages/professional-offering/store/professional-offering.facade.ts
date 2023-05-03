import { Injectable } from '@angular/core';
import { ProfessionalOffering } from '@lib/interfaces';
import { Store } from '@ngrx/store';

import {
  deleteProfessionalOffering,
  getProfessionalOfferings,
  setAll,
  setEditProfessionalOffering,
  setProfessionalOfferingError,
  updateProfessionalOfferings,
  upsertProfessionalOffering,
} from './professional-offering.actions';
import {
  selectEditProfessionalOffering,
  selectProfessionalOfferingError,
  selectProfessionalOfferings,
} from './professional-offering.selectors';

@Injectable({ providedIn: 'root' })
export class ProfessionalOfferingFacade {
  professionalOfferings$ = this.store.select(selectProfessionalOfferings);
  professionalOfferingError$ = this.store.select(
    selectProfessionalOfferingError
  );
  editProfessionalOffering$ = this.store.select(selectEditProfessionalOffering);

  constructor(private store: Store) {}

  getProfessionalOfferings() {
    this.store.dispatch(getProfessionalOfferings());
  }

  setAll(professionalOfferings: ProfessionalOffering[]) {
    this.store.dispatch(setAll({ professionalOfferings }));
  }

  upsertProfessionalOffering(professionalOffering: ProfessionalOffering) {
    this.store.dispatch(upsertProfessionalOffering({ professionalOffering }));
  }

  updateProfessionalOfferings(professionalOfferings: ProfessionalOffering[]) {
    this.store.dispatch(updateProfessionalOfferings({ professionalOfferings }));
  }

  setEditProfessionalOffering(professionalOffering: ProfessionalOffering) {
    this.store.dispatch(setEditProfessionalOffering({ professionalOffering }));
  }

  deleteProfessionalOffering(id?: string) {
    this.store.dispatch(deleteProfessionalOffering({ id }));
  }

  resetEditProfessionalOffering() {
    this.store.dispatch(
      setEditProfessionalOffering({ professionalOffering: null })
    );
  }

  setProfessionalOfferingError(error: any) {
    this.store.dispatch(setProfessionalOfferingError({ error }));
  }
}
