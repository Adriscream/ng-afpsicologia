import { Module } from '@nestjs/common';
import { FirestoreService } from './firestore.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [FirestoreService],
  exports: [FirestoreService],
})
export class FirestoreModule {}
