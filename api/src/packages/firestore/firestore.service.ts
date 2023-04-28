import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

@Injectable()
export class FirestoreService {
  constructor(private configService: ConfigService) {}

  firebaseConfig = {
    apiKey: this.configService.get('FIRESTORE_API_KEY'),
    authDomain: this.configService.get('FIRESTORE_AUTH_DOMAIN'),
    projectId: this.configService.get('FIRESTORE_PROJECT_ID'),
    storageBucket: this.configService.get('FIRESTORE_STORAGE_BUCKET'),
    messagingSenderId: this.configService.get('FIRESTORE_SENDER_ID'),
    appId: this.configService.get('FIRESTORE_APP_ID'),
    measurementId: this.configService.get('FIRESTORE_MEADUREMENT_ID'),
  };

  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);

  db = getFirestore(this.app);
}
