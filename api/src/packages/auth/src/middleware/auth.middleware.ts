import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthTokenVerifierService } from '../service/auth-token-verifier.service';
import { logger } from '@common/logger';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  private readonly log = logger(AuthMiddleware.name);

  constructor(
    private readonly authTokenVerifierService: AuthTokenVerifierService
  ) {}

  async use(req: Request, res: Response, next: (error?: Error | any) => void) {
    const auth = req.headers.authorization;
    if (!auth) {
      next();
      return;
    }
    try {
      const authToken = auth.replace(/^Bearer /i, '');

      res.locals.authToken = authToken;
      res.locals.session = await this.authTokenVerifierService.verify(
        authToken
      );
    } catch (err) {
      this.log.debug('Error verifying auth token', err);
    } finally {
      next();
    }
  }
}
