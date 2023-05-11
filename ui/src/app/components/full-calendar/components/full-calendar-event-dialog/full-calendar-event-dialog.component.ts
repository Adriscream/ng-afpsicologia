import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FullCalendarDialogProps } from '@components/full-calendar/interfaces/full-calendar-dialog';
import { ClientFacade } from '@pages/client/store/client.facade';
import { ProfessionalOfferingFacade } from '@pages/professional-offering/store/professional-offering.facade';
import { map, Observable, take } from 'rxjs';

@Component({
  selector: 'af-full-calendar-event-dialog',
  templateUrl: './full-calendar-event-dialog.component.html',
  styleUrls: ['./full-calendar-event-dialog.component.scss'],
})
export class FullCalendarEventDialogComponent {
  eventForm = this.formBuilder.group({
    clientId: ['', Validators.required],
    serviceId: ['', Validators.required],
    paymentMethod: ['cash', Validators.required],
    status: ['unpaid', Validators.required],
    end: [new Date(), Validators.required],
    start: [new Date(), Validators.required],
  });

  clientOptions$?: Observable<{ value: string; label: string }[]>;
  serviceOptions$?: Observable<{ value: string; label: string }[]>;
  paymentMethodOptions?: { value: string; label: string }[];
  statusOptions?: { value: string; label: string }[];

  constructor(
    private formBuilder: FormBuilder,
    private clientFacade: ClientFacade,
    private professionalOfferingFacade: ProfessionalOfferingFacade,
    private dialogRef: MatDialogRef<FullCalendarEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FullCalendarDialogProps
  ) {
    debugger;
    this.eventForm.patchValue({ ...this.eventForm.value, ...this.data });
    this.clientOptions$ = this.clientFacade.clients$.pipe(
      map((clients) => {
        return clients.map(({ id = '', firstName }) => ({
          value: id,
          label: firstName,
        }));
      })
    );

    this.serviceOptions$ =
      this.professionalOfferingFacade.professionalOfferings$.pipe(
        map((services) =>
          services.map(({ id = '', name }) => ({ value: id, label: name }))
        )
      );

    // TODO change to object.entries(enum)
    this.paymentMethodOptions = [
      'paid',
      'unpaid',
      'unconfirmed',
      'confirmed',
      'completed',
      'missed',
    ].map((key) => ({ value: key, label: key }));

    this.statusOptions = ['cash', 'transfer', 'bizum'].map((key) => ({
      value: key,
      label: key,
    }));
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.clientOptions$
        ?.pipe(
          take(1),
          map((clients) =>
            clients.find(({ value }) => value === this.eventForm.value.clientId)
          )
        )
        .subscribe((client) => {
          this.dialogRef.close({
            ...this.eventForm.value,
            title: client?.label,
          });
        });
    }
  }

  onDelete() {
    this.dialogRef.close({
      canDelete: true,
    });
  }
}
