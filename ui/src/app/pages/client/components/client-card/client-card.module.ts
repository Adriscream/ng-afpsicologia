import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { ClientCardComponent } from './client-card.component';

@NgModule({
  declarations: [ClientCardComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule],
  exports: [ClientCardComponent],
})
export class ClientCardModule {}
