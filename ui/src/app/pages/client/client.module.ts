import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from '@components/confirm-dialog/confirm-dialog.module';

import { ClientComponent } from './client.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ClientFormComponent } from './components/client-form/client-form.component';
import { ClientListComponent } from './components/client-list/client-list.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientFormComponent,
    ClientCardComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ClientComponent,
      },
    ]),
    CommonModule,
    DragDropModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class ClientModule {}
