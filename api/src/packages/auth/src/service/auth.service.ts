import { Injectable } from '@nestjs/common';
import { AuthorizationToken, UserSession } from '@common/auth';
import { FirebaseService } from '@common/firebase';
import { AuthMapper } from './auth.mapper';

@Injectable()
export class AuthService {
  // private readonly log = logger(AuthService.name);

  constructor(
    private readonly authMapper: AuthMapper,
    private readonly firebase: FirebaseService
  ) {}

  async signIn({ uid }: UserSession) {
    const user = await this.firebase.auth.getUser(uid);
    return this.authMapper.toUserData(user);
  }

  public async signOut(_authToken: AuthorizationToken) {
    // TODO
  }
}
