import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logGlobalErrors, AllExceptionsFilter } from '@common/error';
import { VersioningType } from '@nestjs/common';

export async function bootstrap() {
  logGlobalErrors();

  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
    prefix: 'v',
  });
  app.useGlobalFilters(new AllExceptionsFilter(app.get(HttpAdapterHost)));

  await app.listen(3000);
}
