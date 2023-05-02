import { isDevMode, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    StoreModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: isDevMode(),
    }),
    EffectsModule.forRoot(),
    UserModule,
  ],
})
export class StateModule {}
