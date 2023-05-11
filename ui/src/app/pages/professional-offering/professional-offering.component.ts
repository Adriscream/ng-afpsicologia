import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ProfessionalOfferingFormComponent } from './components/professional-offering-form/professional-offering-form.component';

@Component({
  selector: 'af-professional-offering',
  templateUrl: './professional-offering.component.html',
  styleUrls: ['./professional-offering.component.scss'],
})
export class ProfessionalOfferingComponent {
  constructor(private dialog: MatDialog) {}

  openForm() {
    this.dialog.open(ProfessionalOfferingFormComponent);
  }
}
