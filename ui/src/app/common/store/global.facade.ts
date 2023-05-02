import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { resetState } from './global.actions';

@Injectable({ providedIn: 'root' })
export class GlobalFacade {
  constructor(private store: Store) {}

  resetState() {
    this.store.dispatch(resetState());
  }
}
