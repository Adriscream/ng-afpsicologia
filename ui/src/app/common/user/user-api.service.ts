import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@lib/interfaces';

@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<User[]>('/user');
  }

  create(user: User) {
    return this.http.post<User>('/user', user);
  }
}
