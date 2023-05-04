import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { ProfessionalOfferingApiService } from '../services/professional-offering-api.service';
import {
  confirmDeleteProfessionalOffering,
  deleteProfessionalOffering,
  getProfessionalOfferings,
  setAll,
  setProfessionalOffering,
  setProfessionalOfferingError,
  upsertProfessionalOffering,
} from './professional-offering.actions';

@Injectable()
export class ProfessionalOfferingEffects {
  loadProfessionalOffering$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProfessionalOfferings),
      exhaustMap(() =>
        this.professionalOfferingApiService.getProfessionalOfferings()
      ),
      map((professionalOfferings) => setAll({ professionalOfferings })),
      catchError((error) => of(setProfessionalOfferingError({ error })))
    )
  );

  upsertProfessionalOffering$ = createEffect(() =>
    this.actions$.pipe(
      ofType(upsertProfessionalOffering),
      exhaustMap(({ professionalOffering }) =>
        this.professionalOfferingApiService.upsert(professionalOffering)
      ),
      map((professionalOffering) =>
        setProfessionalOffering({ professionalOffering })
      ),
      catchError((error) => of(setProfessionalOfferingError({ error })))
    )
  );

  deleteProfessionalOffering$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteProfessionalOffering),
      exhaustMap(({ id }) =>
        this.professionalOfferingApiService
          .delete(id ?? '')
          .pipe(
            map((isDeleted) =>
              confirmDeleteProfessionalOffering({ id, isDeleted })
            )
          )
      ),
      catchError((error) => of(setProfessionalOfferingError({ error })))
    )
  );

  constructor(
    private actions$: Actions,
    private professionalOfferingApiService: ProfessionalOfferingApiService
  ) {}
}
