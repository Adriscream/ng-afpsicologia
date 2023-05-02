import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Response } from 'express';
import { AuthorizationToken } from '../interfaces/auth-token';

export const AuthToken = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): AuthorizationToken => {
    const res = ctx.switchToHttp().getResponse() as Response;
    return res.locals?.authToken;
  }
);
