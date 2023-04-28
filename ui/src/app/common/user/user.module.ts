import { NgModule } from '@angular/core';

import { UserService } from './user.service';
import { UserApiService } from './user-api.service';

@NgModule({
  providers: [UserApiService, UserService],
})
export class UserModule {}
