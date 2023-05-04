import { UserSession } from '@common/auth';
import { Client } from '@lib/interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientMapper {
  mapToEntity(client: Client, { uid: userId }: UserSession): Client {
    return {
      ...client,
      userId,
    };
  }
}
