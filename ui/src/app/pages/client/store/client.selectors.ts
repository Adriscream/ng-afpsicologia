import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter } from './client.adapter';
import { clientKey } from './client.reducer';
import { ClientState } from './client.state';

const { selectAll } = adapter.getSelectors();

export const selectClientState = createFeatureSelector<ClientState>(clientKey);

export const selectClients = createSelector(selectClientState, selectAll);

export const selectEditClient = createSelector(
  selectClientState,
  ({ editClient }) => editClient
);

export const selectClientError = createSelector(
  selectClientState,
  ({ error }) => error
);
