import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { Response } from 'express';
import { UserSession } from '../interfaces/session';

export const Session = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): UserSession | undefined => {
    const res = ctx.switchToHttp().getResponse() as Response;
    return res.locals?.session;
  }
);
