import { Client } from '@lib/interfaces';
import { createAction, props } from '@ngrx/store';

export const getClients = createAction('[Client] GetClients');

export const setAll = createAction(
  '[Client] SetAll',
  props<{ clients: Client[] }>()
);

export const upsertClient = createAction(
  '[Client] UpsertClient',
  props<{ client: Client }>()
);

export const setClient = createAction(
  '[Client] SetClient',
  props<{ client: Client }>()
);

export const updateClients = createAction(
  '[Client] UpdateClients',
  props<{ clients: Client[] }>()
);

export const deleteClient = createAction(
  '[Client] DeleteClient',
  props<{ id?: string }>()
);

export const confirmDeleteClient = createAction(
  '[Client] ConfirmDeleteClient',
  props<{ id?: string; isDeleted: boolean }>()
);

export const setEditClient = createAction(
  '[Client] SetEditClient',
  props<{ client?: Client | null }>()
);

export const setClientError = createAction(
  '[Client] ClientError',
  props<{ error?: any }>()
);
