import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@lib/interfaces';

@Injectable({ providedIn: 'root' })
export class AuthApiService {
  controllerName = `auth`;

  constructor(private http: HttpClient) {}

  signIn() {
    return this.http.post<User>(`/${this.controllerName}/sign-in`, null);
  }

  signOut() {
    return this.http.post(`/${this.controllerName}/sign-out`, null);
  }
}
