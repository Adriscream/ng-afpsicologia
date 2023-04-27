import { NgModule } from '@angular/core';
import { AddressFormModule } from '@components/address-form/address-form.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [AddressFormModule],
})
export class HomeModule {}
