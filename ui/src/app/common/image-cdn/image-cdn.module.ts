import { NgModule } from '@angular/core';
import { IkImageComponent, ImagekitioAngularModule } from 'imagekitio-angular';

import { environment } from '../../../environments/environment';
console.log(environment);
@NgModule({
  imports: [
    ImagekitioAngularModule.forRoot({
      publicKey: environment.imgCDNPublicKey,
      urlEndpoint: environment.imgCDNUrlEndpoint,
      authenticationEndpoint: environment.imgCDNAuthEndpoint,
    }),
  ],
  exports: [IkImageComponent],
})
export class ImageCDNModule {}
