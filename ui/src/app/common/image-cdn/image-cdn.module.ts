import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IkImageComponent } from './af-image.component';
import { ImagekitService } from './image-cdn.service';

@NgModule({
  declarations: [IkImageComponent],
  imports: [CommonModule],
  exports: [IkImageComponent],
  providers: [ImagekitService],
})
export class ImageCDNModule {}
