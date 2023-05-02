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

  async findAll(userId: string): Promise<Client[]> {
    const clients = await this.clientRepository.findAll(userId);
    return clients;
  }

  async findById(id: string): Promise<Client | null> {
    const client = await this.clientRepository.findById(id);
    return client;
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

  async delete(id: string): Promise<boolean> {
    const isDeleted = await this.clientRepository.delete(id);
    return isDeleted;
  }
}
