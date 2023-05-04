import { Injectable } from '@nestjs/common';

import { FirebaseService } from 'src/common/firebase/public-api';

@Injectable()
export class AuthTokenVerifierService {
  constructor(private firebase: FirebaseService) {}

  verify(token: string) {
    return this.firebase.auth.verifyIdToken(token);
  }
}
