import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ClientFormComponent } from './components/client-form/client-form.component';

@Component({
  selector: 'af-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent {
  constructor(private dialog: MatDialog) {}

  openForm() {
    this.dialog.open(ClientFormComponent);
  }
}
