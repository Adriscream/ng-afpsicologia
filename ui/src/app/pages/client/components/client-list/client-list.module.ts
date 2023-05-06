import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [ClientListComponent],
})
export class ClientListModule {}
