import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { getSearchObservable } from '@app/common/search/search.utils';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { Client } from '@lib/interfaces';
import { ClientFacade } from '@pages/client/store/client.facade';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { ClientFormComponent } from '../client-form/client-form.component';

@Component({
  selector: 'af-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent implements OnInit, OnDestroy {
  search = new FormControl({ value: '', disabled: true });

  clients?: Client[];

  clientSubscription?: Subscription;

  constructor(private clientFacade: ClientFacade, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.enableSearch();
  }

  ngOnDestroy(): void {
    this.clientSubscription?.unsubscribe();
  }

  private enableSearch() {
    this.clientSubscription = getSearchObservable<Client>(
      this.clientFacade.clients$,
      this.search.valueChanges
    ).subscribe((clients) => {
      this.clients = clients;
    });

    this.search.enable();
  }

  drop(event: CdkDragDrop<Client[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  editClient(client: Client) {
    this.clientFacade.setEditClient(client);
    this.dialog.open(ClientFormComponent);
  }

  deleteClient(id?: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef
      .afterClosed()
      .pipe(take(1))
      .subscribe((result) => {
        if (result) {
          this.clientFacade.deleteClient(id);
        }
      });
  }
}
