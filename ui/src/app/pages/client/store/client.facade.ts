import { Injectable } from '@angular/core';
import { Client } from '@lib/interfaces';
import { Store } from '@ngrx/store';

import {
  deleteClient,
  getClients,
  setAll,
  setClientError,
  setEditClient,
  updateClients,
  upsertClient,
} from './client.actions';
import {
  selectClientError,
  selectClients,
  selectEditClient,
} from './client.selectors';

@Injectable({ providedIn: 'root' })
export class ClientFacade {
  clients$ = this.store.select(selectClients);
  clientError$ = this.store.select(selectClientError);
  editClient$ = this.store.select(selectEditClient);

  constructor(private store: Store) {}

  getClients() {
    this.store.dispatch(getClients());
  }

  setAll(clients: Client[]) {
    this.store.dispatch(setAll({ clients }));
  }

  upsertClient(client: Client) {
    this.store.dispatch(upsertClient({ client }));
  }

  updateClients(clients: Client[]) {
    this.store.dispatch(updateClients({ clients }));
  }

  setEditClient(client: Client) {
    this.store.dispatch(setEditClient({ client }));
  }

  deleteClient(id?: string) {
    this.store.dispatch(deleteClient({ id }));
  }

  resetEditClient() {
    this.store.dispatch(setEditClient({ client: null }));
  }

  setClientError(error: any) {
    this.store.dispatch(setClientError({ error }));
  }
}
