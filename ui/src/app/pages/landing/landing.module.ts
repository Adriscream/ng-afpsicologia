import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageCDNModule } from '@app/common/image-cdn/image-cdn.module';
import { AddressFormModule } from '@components/address-form/address-form.module';

import { LandingComponent } from './landing.component';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LandingComponent,
      },
    ]),
    AddressFormModule,
    ImageCDNModule,
  ],
})
export class LandingModule {}
