import { Injectable } from '@angular/core';
import { User } from '@lib/interfaces';
import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { lastValueFrom, mergeMap, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { GlobalFacade } from '../store/global.facade';
import { UserFacade } from '../store/user/public-api';
import { AuthApiService } from './services/auth-api.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  app: FirebaseApp;
  auth: Auth;
  provider: GoogleAuthProvider;
  idToken?: string;

  get isLoggedIn() {
    return !!this.idToken;
  }

  constructor(
    private authApiService: AuthApiService,
    private globalFacade: GlobalFacade,
    private userFacade: UserFacade
  ) {
    this.app = initializeApp({
      apiKey: environment.firestoreApiKey,
      authDomain: environment.firestoreAuthDomain,
      projectId: environment.firestoreProjectId,
      storageBucket: environment.firestoreStorageBucket,
      messagingSenderId: environment.firestoreSenderId,
      appId: environment.firestoreAppId,
      measurementId: environment.firestoreMeadurementId,
    });
    this.auth = getAuth(this.app);

    const provider = new GoogleAuthProvider();
    provider.addScope('email');
    provider.addScope('profile');
    provider.setCustomParameters({
      prompt: 'consent',
    });
    this.provider = provider;
  }

  login() {
    const login$ = new Subject<User | null>();

    try {
      const unsubscribe = this.auth.onIdTokenChanged(async (value) => {
        if (!value) {
          await signInWithPopup(this.auth, this.provider);
        } else {
          this.idToken = await value?.getIdToken();
          const user = await lastValueFrom(this.signIn());
          this.userFacade.setUser(user);
          unsubscribe();
          login$.next(user);
        }
      });
    } catch (error) {
      console.error('Login error', error);
      login$.next(null);
    }

    return login$;
  }

  signIn() {
    return this.authApiService.signIn();
  }

  singOut() {
    return this.authApiService.signOut().pipe(
      mergeMap(() => {
        this.idToken = '';
        this.globalFacade.resetState();
        return signOut(this.auth);
      })
    );
  }
}
