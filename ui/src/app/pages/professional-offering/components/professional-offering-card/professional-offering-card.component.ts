import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProfessionalOffering } from '@lib/interfaces';

@Component({
  selector: 'af-professional-offering-card',
  templateUrl: './professional-offering-card.component.html',
  styleUrls: ['./professional-offering-card.component.scss'],
})
export class ProfessionalOfferingCardComponent {
  @Input()
  professionalOffering?: ProfessionalOffering;

  @Output()
  edit = new EventEmitter<void>();

  @Output()
  delete = new EventEmitter<void>();
}
