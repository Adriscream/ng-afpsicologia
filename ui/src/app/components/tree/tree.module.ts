import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { TreeComponent } from './tree.component';

@NgModule({
  declarations: [TreeComponent],
  imports: [CommonModule, MatTreeModule, MatIconModule, MatButtonModule],
  exports: [TreeComponent],
})
export class TreeModule {}
