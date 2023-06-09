import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { getSearchObservable } from '@app/common/search/search.utils';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { ProfessionalOffering } from '@lib/interfaces';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { ProfessionalOfferingFacade } from '../../store/professional-offering.facade';
import { ProfessionalOfferingFormComponent } from '../professional-offering-form/professional-offering-form.component';

@Component({
  selector: 'af-professional-offering-list',
  templateUrl: './professional-offering-list.component.html',
  styleUrls: ['./professional-offering-list.component.scss'],
})
export class ProfessionalOfferingListComponent implements OnInit, OnDestroy {
  search = new FormControl({ value: '', disabled: true });

  professionalOfferings?: ProfessionalOffering[];

  professionalOfferingsSubscription?: Subscription;

  constructor(
    private professionalOfferingFacade: ProfessionalOfferingFacade,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.enableSearch();
  }

  ngOnDestroy(): void {
    this.professionalOfferingsSubscription?.unsubscribe();
  }

  private enableSearch() {
    this.professionalOfferingsSubscription =
      getSearchObservable<ProfessionalOffering>(
        this.professionalOfferingFacade.professionalOfferings$,
        this.search.valueChanges
      ).subscribe((professionalOfferings) => {
        this.professionalOfferings = professionalOfferings;
      });

    this.search.enable();
  }

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
    this.dialog.open(ProfessionalOfferingFormComponent);
  }

  deleteProfessionalOffering(id?: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(first())
      .subscribe((result) => {
        if (result) {
          this.professionalOfferingFacade.deleteProfessionalOffering(id);
        }
      });
  }
}
