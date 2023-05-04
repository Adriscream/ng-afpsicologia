import { createReducer, on } from '@ngrx/store';

import { resetState } from '../global.actions';
import { setUser, setUserError } from './user.actions';
import { UserState } from './user.state';

export const userKey = 'user';

export const initialState: UserState = {
  detail: { firstName: '', email: '' },
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(resetState, () => initialState),
  on(
    setUser,
    (state, { user }): UserState => ({ ...state, detail: user, error: null })
  ),
  on(setUserError, (state, err): UserState => ({ ...state, error: err }))
);
