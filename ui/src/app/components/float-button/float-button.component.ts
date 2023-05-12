import { Component, Input } from '@angular/core';

@Component({
  selector: 'af-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.scss'],
})
export class FloatButtonComponent {
  @Input()
  icon = 'add';
}
