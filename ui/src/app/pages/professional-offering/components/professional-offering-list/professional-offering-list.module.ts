import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmDialogModule } from '@components/confirm-dialog/confirm-dialog.module';

import { ProfessionalOfferingCardModule } from '../professional-offering-card/professional-offering-card.module';
import { ProfessionalOfferingListComponent } from './professional-offering-list.component';

@NgModule({
  declarations: [ProfessionalOfferingListComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ProfessionalOfferingCardModule,
    ConfirmDialogModule,
  ],
  exports: [ProfessionalOfferingListComponent],
})
export class ProfessionalOfferingListModule {}
