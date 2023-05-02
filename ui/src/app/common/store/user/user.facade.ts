import { Injectable } from '@angular/core';
import { User } from '@lib/interfaces';
import { Store } from '@ngrx/store';

import { setUser, setUserError } from './user.actions';
import { selectUser, selectUserError } from './user.selectors';

@Injectable({ providedIn: 'root' })
export class UserFacade {
  user$ = this.store.select(selectUser);
  userError$ = this.store.select(selectUserError);

  constructor(private store: Store) {}

  setUser(user: User) {
    this.store.dispatch(setUser({ user }));
  }

  setUserError(error: any) {
    this.store.dispatch(setUserError({ error }));
  }
}
