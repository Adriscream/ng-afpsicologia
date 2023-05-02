import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmDialogModule } from '@components/confirm-dialog/confirm-dialog.module';

import { ClientCardModule } from '../client-card/client-card.module';
import { ClientListComponent } from './client-list.component';

@NgModule({
  declarations: [ClientListComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ClientCardModule,
    ConfirmDialogModule,
  ],
  exports: [ClientListComponent],
})
export class ClientListModule {}
