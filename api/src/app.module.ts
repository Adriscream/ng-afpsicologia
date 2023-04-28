import { Module } from '@nestjs/common';
import { UserModule } from './packages/user/user.module';

@Module({
  imports: [
    UserModule,
    // CitaModule,
    // FacturaModule,
  ],
})
export class AppModule {}
