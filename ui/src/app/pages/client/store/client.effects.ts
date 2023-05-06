import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';

import { ClientApiService } from '../services/client-api.service';
import {
  confirmDeleteClient,
  deleteClient,
  getClients,
  setAll,
  setClient,
  setClientError,
  upsertClient,
} from './client.actions';

@Injectable()
export class ClientEffects {
  loadClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getClients),
      exhaustMap(() => this.clientApiService.getClients()),
      map((clients) => setAll({ clients })),
      catchError((error) => of(setClientError({ error })))
    )
  );

  upsertClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(upsertClient),
      exhaustMap(({ client }) => this.clientApiService.upsert(client)),
      map((client) => setClient({ client })),
      catchError((error) => of(setClientError({ error })))
    )
  );

  deleteClient$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteClient),
      exhaustMap(({ id }) =>
        this.clientApiService
          .delete(id ?? '')
          .pipe(map((isDeleted) => confirmDeleteClient({ id, isDeleted })))
      ),
      catchError((error) => of(setClientError({ error })))
    )
  );

  constructor(
    private actions$: Actions,
    private clientApiService: ClientApiService
  ) {}
}
