import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from './user.entity';

@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/user');
  }

  create(user: User) {
    return this.http.post<User>('http://localhost:3000/user', user);
  }
}
