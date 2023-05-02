import { Controller, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import {
  AuthToken,
  AuthorizationToken,
  Session,
  UserSession,
} from '@common/auth';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  signIn(@Session() session: UserSession) {
    return this.authService.signIn(session);
  }

  @Post('/sign-out')
  signOut(@AuthToken() authToken: AuthorizationToken) {
    return this.authService.signOut(authToken);
  }
}
