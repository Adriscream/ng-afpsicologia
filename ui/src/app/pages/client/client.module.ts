import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientFormModule } from './components/client-form/client-form.module';
import { ClientListModule } from './components/client-list/client-list.module';

@NgModule({
  declarations: [ClientComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ClientComponent,
      },
    ]),
    CommonModule,
    ClientListModule,
    ClientFormModule,
  ],
})
export class ClientModule {}
