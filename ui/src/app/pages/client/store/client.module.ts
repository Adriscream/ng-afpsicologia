import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ClientApiService } from '../services/client-api.service';
import { ClientEffects } from './client.effects';
import { clientKey, clientReducer } from './client.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(clientKey, clientReducer),
    EffectsModule.forFeature(ClientEffects),
  ],
  providers: [ClientApiService],
})
export class ClientStoreModule {}
