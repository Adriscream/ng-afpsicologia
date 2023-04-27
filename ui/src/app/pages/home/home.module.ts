import { NgModule } from '@angular/core';
import { AddressFormModule } from '@components/address-form/address-form.module';
import { TableModule } from '@components/table/table.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [AddressFormModule, TableModule],
})
export class HomeModule {}
