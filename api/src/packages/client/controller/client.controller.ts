import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { ClientService } from '../service/client.service';
import { Client } from '@lib/interfaces';
import { Session, UserSession } from '@common/auth';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll(@Session() session: UserSession): Promise<Client[]> {
    return this.clientService.findAll(session.uid);
  }

  @Post()
  create(
    @Session() session: UserSession,
    @Body() client: Client
  ): Promise<Client> {
    return this.clientService.upsert(client, session);
  }

  @Delete()
  delete(@Query('id') id: string): Promise<boolean> {
    return this.clientService.delete(id);
  }
}
