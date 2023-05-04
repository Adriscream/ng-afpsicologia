import {
  Logger as WinstonLogger,
  createLogger,
  addColors,
  format,
  transports,
} from 'winston';

const levels = {
  provider: 0,
  emerg: 1,
  alert: 2,
  crit: 3,
  error: 4,
  warning: 5,
  info: 6,
  debug: 7,
  notice: 8,
};

const levelLog = {
  [levels.provider]: 'provider',
  [levels.emerg]: 'emerg',
  [levels.alert]: 'alert',
  [levels.crit]: 'crit',
  [levels.error]: 'error',
  [levels.warning]: 'warning',
  [levels.info]: 'info',
  [levels.debug]: 'debug',
  [levels.notice]: 'notice',
};

const levelLogColors = {
  [levelLog[levels.provider]]: 'red',
  [levelLog[levels.emerg]]: 'red',
  [levelLog[levels.alert]]: 'red',
  [levelLog[levels.crit]]: 'red',
  [levelLog[levels.error]]: 'red',
  [levelLog[levels.warning]]: 'yellow',
  [levelLog[levels.info]]: 'blue',
  [levelLog[levels.debug]]: 'blue',
  [levelLog[levels.notice]]: 'blue',
};

export type LogMessageArgs = any[];
export interface LoggerBase {
  provider(msg: any, data?: any): void;
  verbose(msg: any, data?: any): void;
  debug(msg: any, data?: any): void;
  log(msg: any, data?: any): void;
  info(msg: any, data?: any): void;
  warn(msg: any, data?: any): void;
  error(msg: any, data?: any): void;
  critical(msg: any, data?: any): void;
}

class Logger implements LoggerBase {
  private logger: WinstonLogger;
  private module: string;

  constructor(module: string, logger: WinstonLogger) {
    this.logger = logger;
    this.module = module;
  }

  private formatMessage(msg: string) {
    return `${this.module}:: ${msg}`;
  }
  provider(msg: any, data?: any): void {
    this.logger.log(levelLog[levels.provider], this.formatMessage(msg), data);
  }
  verbose(msg: any, data: any = ''): void {
    this.logger.log(levelLog[levels.notice], this.formatMessage(msg), data);
  }
  debug(msg: any, data: any = ''): void {
    this.logger.log(levelLog[levels.debug], this.formatMessage(msg), data);
  }
  info(msg: any, data: any = ''): void {
    this.logger.log(levelLog[levels.info], this.formatMessage(msg), data);
  }
  log(msg: any, data: any = ''): void {
    this.logger.log(levelLog[levels.info], this.formatMessage(msg), data);
  }
  warn(msg: any, data: any = ''): void {
    this.logger.log(levelLog[levels.warning], this.formatMessage(msg), data);
  }
  error(msg: any, data: any = ''): void {
    this.logger.log(levelLog[levels.error], this.formatMessage(msg), data);
  }
  critical(msg: any, data: any = ''): void {
    this.logger.log(levelLog[levels.crit], this.formatMessage(msg), data);
  }
}

function setupLogger() {
  return function logger(module: string) {
    const instance = createLogger({
      levels: levels,
      level: levelLog[levels.notice],
      format: format.json(),
      transports: [
        new transports.Console({
          level: levelLog[levels.notice],
          format:
            process.env.IS_LOCAL === 'true'
              ? format.combine(
                  format.timestamp(),
                  format.colorize(),
                  format.simple()
                )
              : format.json(),
        }),
      ],
    });

    addColors(levelLogColors);

    return new Logger(module, instance);
  };
}

export const logger = setupLogger();
