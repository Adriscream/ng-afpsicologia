import { User } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';
import { UserRecord } from 'firebase-admin/auth';

@Injectable()
export class AuthMapper {
  toUserData({
    uid,
    email,
    displayName,
    phoneNumber,
    photoURL,
    metadata: { creationTime, lastSignInTime },
  }: UserRecord): User {
    return {
      id: uid,
      firstName: displayName as string,
      phoneNumber: phoneNumber,
      email: email as string,
      photoURL,
      createdAt: new Date(creationTime),
      updatedAt: new Date(lastSignInTime),
    };
  }
}
