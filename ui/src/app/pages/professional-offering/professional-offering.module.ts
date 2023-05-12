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
import { FloatButtonModule } from '@components/float-button/float-button.module';

import { ProfessionalOfferingCardComponent } from './components/professional-offering-card/professional-offering-card.component';
import { ProfessionalOfferingFormComponent } from './components/professional-offering-form/professional-offering-form.component';
import { ProfessionalOfferingListComponent } from './components/professional-offering-list/professional-offering-list.component';
import { ProfessionalOfferingComponent } from './professional-offering.component';

@NgModule({
  declarations: [
    ProfessionalOfferingComponent,
    ProfessionalOfferingListComponent,
    ProfessionalOfferingFormComponent,
    ProfessionalOfferingCardComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ProfessionalOfferingComponent,
      },
    ]),
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DragDropModule,
    ConfirmDialogModule,
    FloatButtonModule,
  ],
})
export class ProfessionalOfferingModule {}
