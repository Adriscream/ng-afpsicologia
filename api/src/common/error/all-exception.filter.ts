import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { logger } from '../logger/logger';
import { ControlledException } from './control.error';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly log = logger(AllExceptionsFilter.name);

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    if (this.shouldLog(exception)) {
      this.log.error(exception);
    }
    const responseBody = this.getBody(exception);
    httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus);
  }

  private getBody(exception: unknown) {
    return exception instanceof HttpException ? exception.getResponse() : null;
  }

  private shouldLog(exception: unknown) {
    if (exception instanceof ControlledException) {
      return false;
    }

    if (!(exception instanceof HttpException)) {
      return true;
    }

    const status = exception.getStatus();
    const noLogCodes = [404];

    return !noLogCodes.includes(status);
  }
}
