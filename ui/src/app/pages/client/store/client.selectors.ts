import { createFeatureSelector, createSelector } from '@ngrx/store';

import { adapter } from './client.adapter';
import { ClientState } from './client.state';

const { selectAll } = adapter.getSelectors();

export const selectClientState = createFeatureSelector<ClientState>('client');

export const selectClients = createSelector(selectClientState, selectAll);

export const selectEditClient = createSelector(
  selectClientState,
  ({ editClient }) => editClient
);

export const selectClientError = createSelector(
  selectClientState,
  ({ error }) => error
);
