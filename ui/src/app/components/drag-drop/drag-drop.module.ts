import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DragDropComponent } from './drag-drop.component';

@NgModule({
  declarations: [DragDropComponent],
  imports: [CommonModule, DragDropModule],
  bootstrap: [DragDropComponent],
})
export class AfDragDropModule {}
