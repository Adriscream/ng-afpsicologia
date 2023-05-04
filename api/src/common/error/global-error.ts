import { logger } from '../logger/logger';

const log = logger('security/global-errors');

export function logGlobalErrors() {
  const logError = (error: any) => {
    log.error(error);
  };

  process.on('unhandledRejection', logError);
  process.on('uncaughtException', logError);
}
