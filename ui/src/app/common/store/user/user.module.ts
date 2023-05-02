import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { userKey, userReducer } from './user.reducer';

@NgModule({
  imports: [StoreModule.forFeature(userKey, userReducer)],
})
export class UserModule {}
