import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProfessionalOfferingFormModule } from './components/professional-offering-form/professional-offering-form.module';
import { ProfessionalOfferingListModule } from './components/professional-offering-list/professional-offering-list.module';
import { ProfessionalOfferingComponent } from './professional-offering.component';

@NgModule({
  declarations: [ProfessionalOfferingComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProfessionalOfferingComponent,
      },
    ]),
    CommonModule,
    ProfessionalOfferingListModule,
    ProfessionalOfferingFormModule,
  ],
})
export class ProfessionalOfferingModule {}
