import { HttpException, HttpStatus } from '@nestjs/common';

export class ControlledException extends HttpException {}

export class ControlledBadRequest extends ControlledException {
  constructor(message: string | Record<string, any> = '') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}

export class ControlledUnauthorized extends ControlledException {
  constructor(message: string | Record<string, any> = '') {
    super(message, HttpStatus.UNAUTHORIZED);
  }
}

export class ControlledForbidden extends ControlledException {
  constructor(message: string | Record<string, any> = '') {
    super(message, HttpStatus.FORBIDDEN);
  }
}
export class ControlledNotFound extends ControlledException {
  constructor(message: string | Record<string, any> = '') {
    super(message, HttpStatus.NOT_FOUND);
  }
}
export class ControlledInternalServerError extends ControlledException {
  constructor(message: string | Record<string, any> = '') {
    super(message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
