import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { ProfessionalOffering } from '@lib/interfaces';
import { take } from 'rxjs/operators';

import { ProfessionalOfferingFacade } from '../../store/professional-offering.facade';

@Component({
  selector: 'af-professional-offering-list',
  templateUrl: './professional-offering-list.component.html',
  styleUrls: ['./professional-offering-list.component.scss'],
})
export class ProfessionalOfferingListComponent {
  professionalOfferings$ =
    this.professionalOfferingFacade.professionalOfferings$;

  constructor(
    private professionalOfferingFacade: ProfessionalOfferingFacade,
    private dialog: MatDialog
  ) {}

  drop(event: CdkDragDrop<ProfessionalOffering[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  editProfessionalOffering(professionalOffering: ProfessionalOffering) {
    this.professionalOfferingFacade.setEditProfessionalOffering(
      professionalOffering
    );
  }

  deleteProfessionalOffering(id?: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.professionalOfferingFacade.deleteProfessionalOffering(id);
        }
      });
  }
}
