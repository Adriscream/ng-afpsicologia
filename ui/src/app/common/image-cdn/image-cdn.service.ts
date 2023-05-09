import { Injectable } from '@angular/core';
import ImageKit from 'imagekit-javascript';
import { environment } from 'src/environments/environment';

@Injectable()
export class ImagekitService {
  private _ikInstance: ImageKit;

  constructor() {
    this._ikInstance = new ImageKit({
      publicKey: environment.imgCDNPublicKey,
      urlEndpoint: environment.imgCDNUrlEndpoint,
      authenticationEndpoint: environment.imgCDNAuthEndpoint,
    });
  }

  get ikInstance(): ImageKit {
    return this._ikInstance;
  }
}
