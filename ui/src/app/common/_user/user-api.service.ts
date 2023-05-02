import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@lib/interfaces';

@Injectable()
export class UserApiService {
  controllerName = 'user';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>(`/${this.controllerName}`);
  }

  create(user: User) {
    return this.http.post<User>(`/${this.controllerName}`, user);
  }
}
