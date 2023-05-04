import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUser = createSelector(
  selectUserState,
  ({ detail }) => detail
);

export const selectUserError = createSelector(
  selectUserState,
  ({ error }) => error
);
