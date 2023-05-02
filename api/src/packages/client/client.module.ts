import { Module } from '@nestjs/common';
import { ClientController } from './controller/client.controller';
import { ClientService } from './service/client.service';
import { ClientRepository } from './repository/client.repository';
import { FirebaseModule } from 'src/common/firebase/public-api';
import { ClientMapper } from './service/client.mapper';

@Module({
  imports: [FirebaseModule],
  controllers: [ClientController],
  providers: [ClientService, ClientRepository, ClientMapper],
})
export class ClientModule {}
