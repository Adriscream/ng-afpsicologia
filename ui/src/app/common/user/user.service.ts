import { Injectable } from '@angular/core';
import { User } from '@lib/interfaces';
import { BehaviorSubject, mergeMap, tap } from 'rxjs';

import { UserApiService } from './user-api.service';

@Injectable()
export class UserService {
  users$ = new BehaviorSubject<User[]>([]);

  constructor(private userApiService: UserApiService) {}

  getUsers() {
    return this.userApiService
      .getUsers()
      .pipe(tap((users) => this.users$.next(users)));
  }

  create(user: User) {
    return this.userApiService.create(user).pipe(mergeMap(this.getUsers));
  }
}
