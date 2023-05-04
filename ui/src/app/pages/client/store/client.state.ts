import { Client } from '@lib/interfaces';
import { EntityState } from '@ngrx/entity';

export interface ClientState extends EntityState<Client> {
  editClient?: Client | null;
  error: any;
}
