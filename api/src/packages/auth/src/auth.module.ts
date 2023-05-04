import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthController } from './controller/auth.controller';
import { AuthGuardProvider } from './guard/auth.guard';
import { AuthMiddleware } from './middleware/auth.middleware';
import { AuthTokenVerifierService } from './service/auth-token-verifier.service';
import { AuthService } from './service/auth.service';
import { FirebaseModule } from 'src/common/firebase/public-api';
import { AuthMapper } from './service/auth.mapper';

@Module({
  controllers: [AuthController],
  imports: [FirebaseModule],

  providers: [
    AuthTokenVerifierService,
    AuthMiddleware,
    AuthGuardProvider,
    AuthService,
    AuthMapper,
  ],
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
