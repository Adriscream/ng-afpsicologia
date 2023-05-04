import { resetState } from '@app/common/store/global.actions';
import { Client } from '@lib/interfaces';
import { Update } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import {
  confirmDeleteClient,
  setAll,
  setClient,
  setClientError,
  setEditClient,
  updateClients,
} from './client.actions';
import { adapter } from './client.adapter';
import { ClientState } from './client.state';

export const clientKey = 'client';

export const initialState: ClientState = adapter.getInitialState({
  error: null,
});

export const clientReducer = createReducer(
  initialState,
  on(resetState, () => initialState),
  on(setAll, (state, { clients }) => {
    return adapter.setAll(clients, state);
  }),
  on(setClient, (state, { client }) => {
    return adapter.upsertOne(client, state);
  }),
  on(updateClients, (state, { clients }) => {
    return adapter.updateMany(
      clients.map(
        ({ id, ...client }) => ({ id, changes: client } as Update<Client>)
      ),
      state
    );
  }),
  on(confirmDeleteClient, (state, { id = '', isDeleted }): ClientState => {
    if (!isDeleted) return state;
    const newState = adapter.removeOne(id, state);
    return newState;
  }),
  on(
    setEditClient,
    (state, { client }): ClientState => ({ ...state, editClient: client })
  ),
  on(setClientError, (state, { error }): ClientState => ({ ...state, error }))
);
