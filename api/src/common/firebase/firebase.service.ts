import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { cert, initializeApp } from 'firebase-admin/app';
import { Firestore, getFirestore } from 'firebase-admin/firestore';
import { Auth, getAuth } from 'firebase-admin/auth';

@Injectable()
export class FirebaseService {
  auth: Auth;
  db: Firestore;

  constructor(private configService: ConfigService) {
    debugger;

    const privateKey = this.configService
      .get('FIREBASE_PRIVATE_KEY')
      .replace(/\\n/g, '\n');

    const firebaseConfig = {
      credential: cert({
        projectId: this.configService.get('FIREBASE_PROJECT_ID'),
        privateKey,
        clientEmail: this.configService.get('FIREBASE_CLIENT_EMAIL'),
      }),
    };

    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.db = getFirestore(app);
  }
}

// const firebaseConfig = {
//   credential: cert({
//     type: this.configService.get('FIREBASE_TYPE'),
//     project_id: this.configService.get('FIREBASE_PROJECT_ID'),
//     private_key_id: this.configService.get('FIREBASE_PRIVATE_KEY_ID'),
//     private_ke: this.configService.get('FIREBASE_PRIVATE_KEY'),
//     client_email: this.configService.get('FIREBASE_CLIENT_EMAIL'),
//     client_id: this.configService.get('FIREBASE_CLIENT_ID'),
//     auth_uri: this.configService.get('FIREBASE_AUTH_URI'),
//     token_uri: this.configService.get('FIREBASE_TOKEN_URI'),
//     auth_provider_cert_url: this.configService.get(
//       'FIREBASE_AUTH_PROVIDER_CERT_URL'
//     ),
//     clientCertUrl: this.configService.get('FIREBASE_CLIENT_CERT_URL'),
//   }),
// };
