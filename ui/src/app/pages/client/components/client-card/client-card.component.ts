import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '@lib/interfaces';

@Component({
  selector: 'af-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.scss'],
})
export class ClientCardComponent {
  @Input()
  client?: Client;

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  delete = new EventEmitter<void>();
}
