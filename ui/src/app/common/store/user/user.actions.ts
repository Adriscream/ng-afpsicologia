import { User } from '@lib/interfaces';
import { createAction, props } from '@ngrx/store';

export const setUser = createAction('[User] SetUser', props<{ user: User }>());

export const setUserError = createAction(
  '[User] UserError',
  props<{ error?: any }>()
);
