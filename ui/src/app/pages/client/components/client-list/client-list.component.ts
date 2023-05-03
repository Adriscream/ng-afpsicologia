import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@components/confirm-dialog/confirm-dialog.component';
import { Client } from '@lib/interfaces';
import { ClientFacade } from '@pages/client/store/client.facade';
import { take } from 'rxjs/operators';

@Component({
  selector: 'af-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
})
export class ClientListComponent {
  clients$ = this.clientFacade.clients$;

  constructor(private clientFacade: ClientFacade, private dialog: MatDialog) {}

  drop(event: CdkDragDrop<Client[]>): void {
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  editClient(client: Client) {
    this.clientFacade.setEditClient(client);
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
