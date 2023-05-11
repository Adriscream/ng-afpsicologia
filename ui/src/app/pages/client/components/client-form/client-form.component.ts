import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Client } from '@lib/interfaces';
import { ClientFacade } from '@pages/client/store/client.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'af-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit, OnDestroy {
  client?: Client | null;

  clientForm = this.formBuilder.group({
    alias: [''],
    firstName: ['', Validators.required],
    lastName: [''],
    idNumber: [''],
    phoneNumber: [''],
    email: ['', [Validators.email]],
    postalCode: [''],
    address: [''],
    city: [''],
  });

  editClientSubscription?: Subscription;

  get buttonText() {
    return this.client ? 'Edit' : 'Create';
  }

  constructor(
    private formBuilder: FormBuilder,
    private clientFacade: ClientFacade,
    private dialogRef: MatDialogRef<ClientFormComponent>
  ) {}

  ngOnInit(): void {
    this.editClientSubscription = this.clientFacade.editClient$.subscribe(
      (client) => {
        this.client = client;
        if (client) {
          this.clientForm.patchValue(client as any);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.editClientSubscription?.unsubscribe();
  }

  onSubmit(): void {
    if (this.clientForm.valid) {
      const client = { ...this.client, ...this.clientForm.value } as Client;
      this.clientFacade.upsertClient(client);
      this.clientFacade.resetEditClient();
      this.dialogRef.close(client);
    }
  }

  cancel() {
    this.clientFacade.resetEditClient();
    this.dialogRef.close();
  }
}
