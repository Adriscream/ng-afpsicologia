import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfessionalOffering } from '@lib/interfaces';
import { ClientFormComponent } from '@pages/client/components/client-form/client-form.component';
import { Subscription } from 'rxjs';

import { ProfessionalOfferingFacade } from '../../store/professional-offering.facade';

@Component({
  selector: 'af-professional-offering-form',
  templateUrl: './professional-offering-form.component.html',
  styleUrls: ['./professional-offering-form.component.scss'],
})
export class ProfessionalOfferingFormComponent implements OnInit, OnDestroy {
  professionalOffering?: ProfessionalOffering | null;

  professionalOfferingForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
    duration: [0, Validators.required],
    price: [0, Validators.required],
    iva: [0, Validators.required],
  });

  editProfessionalOfferingSubscription?: Subscription;

  get buttonText() {
    return this.professionalOffering ? 'Edit' : 'Create';
  }

  constructor(
    private formBuilder: FormBuilder,
    private professionalOfferingFacade: ProfessionalOfferingFacade,
    private dialogRef: MatDialogRef<ClientFormComponent>
  ) {}

  ngOnInit(): void {
    this.editProfessionalOfferingSubscription =
      this.professionalOfferingFacade.editProfessionalOffering$.subscribe(
        (professionalOffering) => {
          this.professionalOffering = professionalOffering;
          if (professionalOffering) {
            this.professionalOfferingForm.patchValue(
              professionalOffering as any
            );
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.editProfessionalOfferingSubscription?.unsubscribe();
  }

  onSubmit(): void {
    if (this.professionalOfferingForm.valid) {
      const professionalOffering = {
        ...this.professionalOffering,
        ...this.professionalOfferingForm.value,
      } as ProfessionalOffering;
      this.professionalOfferingFacade.upsertProfessionalOffering(
        professionalOffering
      );
      this.professionalOfferingFacade.resetEditProfessionalOffering();
      this.dialogRef.close(professionalOffering);
    }
  }

  cancel() {
    this.professionalOfferingFacade.resetEditProfessionalOffering();
    this.dialogRef.close();
  }
}
