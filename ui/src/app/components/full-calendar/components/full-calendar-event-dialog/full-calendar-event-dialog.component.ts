import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FullCalendarDialogProps } from '@components/full-calendar/interfaces/full-calendar-dialog';
import { concatLatestFrom } from '@ngrx/effects';
import { ClientFacade } from '@pages/client/store/client.facade';
import { ProfessionalOfferingFacade } from '@pages/professional-offering/store/professional-offering.facade';
import { first, map, Observable } from 'rxjs';

const dateUtil = {
  getDate: (date: Date = new Date()) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  },
};
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
    // end: [dateUtil.getDate(), Validators.required],
    start: [dateUtil.getDate(), Validators.required],
  });

  clientOptions$?: Observable<{ value: string; label: string }[]>;
  serviceOptions$?: Observable<
    { value: string; label: string; duration: number }[]
  >;
  paymentMethodOptions?: { value: string; label: string }[];
  statusOptions?: { value: string; label: string }[];

  constructor(
    private formBuilder: FormBuilder,
    private clientFacade: ClientFacade,
    private professionalOfferingFacade: ProfessionalOfferingFacade,
    private dialogRef: MatDialogRef<FullCalendarEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public props?: FullCalendarDialogProps
  ) {
    const { start, ...data } = props ?? {};
    this.eventForm.patchValue({
      ...this.eventForm.value,
      ...data,
      start: dateUtil.getDate(start),
      // end: dateUtil.getDate(end),
    });
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
          services.map(({ id = '', name, duration }) => ({
            value: id,
            label: name,
            duration,
          }))
        )
      );

    // TODO change to object.entries(enum)
    this.paymentMethodOptions = ['cash', 'transfer', 'bizum'].map((key) => ({
      value: key,
      label: key,
    }));

    this.statusOptions = [
      'paid',
      'unpaid',
      'unconfirmed',
      'confirmed',
      'completed',
      'missed',
    ].map((key) => ({
      value: key,
      label: key,
    }));
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.clientOptions$
        ?.pipe(
          first(),
          map(
            (clients) =>
              clients.find(
                ({ value }) => value === this.eventForm.value.clientId
              )?.label
          ),
          concatLatestFrom(
            () => this.professionalOfferingFacade.professionalOfferings$
          )
        )
        .subscribe(([title, services]) => {
          const newEvent = this.eventForm.value;
          const service = services.find(({ id }) => id === newEvent.serviceId)!;
          const end = new Date(newEvent.start!);
          end.setMinutes(end.getMinutes() + Number(service.duration));
          this.dialogRef.close({
            ...newEvent,
            end,
            title,
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
