import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../repository/client.repository';
import { Client } from '@lib/interfaces';
import { UserSession } from '@common/auth';
import { ClientMapper } from './client.mapper';

@Injectable()
export class ClientService {
  constructor(
    private clientRepository: ClientRepository,
    private clientMapper: ClientMapper
  ) {}

  findAll(userId: string): Promise<Client[]> {
    return this.clientRepository.findAll(userId);
  }

  findById(id: string): Promise<Client | null> {
    return this.clientRepository.findById(id);
  }

  async upsert(data: Client, session: UserSession): Promise<Client> {
    const client = this.clientMapper.mapToEntity(data, session);
    if (client.id) {
      const updatedClient = await this.clientRepository.update(client.id, data);
      if (updatedClient) {
        return updatedClient;
      }
    }
    return this.clientRepository.create(client);
  }

  delete(id: string): Promise<boolean> {
    return this.clientRepository.delete(id);
  }
}
