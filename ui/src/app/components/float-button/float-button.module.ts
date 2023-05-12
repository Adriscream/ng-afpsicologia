import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FloatButtonComponent } from './float-button.component';

@NgModule({
  declarations: [FloatButtonComponent],
  imports: [MatButtonModule, MatIconModule],
  exports: [FloatButtonComponent],
})
export class FloatButtonModule {}
