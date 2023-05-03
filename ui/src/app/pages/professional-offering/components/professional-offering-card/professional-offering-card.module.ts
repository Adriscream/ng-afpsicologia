import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ProfessionalOfferingCardComponent } from './professional-offering-card.component';

@NgModule({
  declarations: [ProfessionalOfferingCardComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule],
  exports: [ProfessionalOfferingCardComponent],
})
export class ProfessionalOfferingCardModule {}
