import { ControlledUnauthorized } from '@common/error';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { Response } from 'express';

@Injectable()
class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const res = context.switchToHttp().getResponse() as Response;
    const authToken = res.locals.authToken;
    const isPublic = this.reflector.get<boolean>(
      'isPublic',
      context.getHandler()
    );

    if (isPublic || authToken) {
      return true;
    }

    throw new ControlledUnauthorized();
  }
}

export const AuthGuardProvider = {
  provide: APP_GUARD,
  useClass: AuthGuard,
};
