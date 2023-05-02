import { Client } from '@lib/interfaces';
import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export const adapter: EntityAdapter<Client> = createEntityAdapter<Client>();
