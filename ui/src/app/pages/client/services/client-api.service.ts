import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '@lib/interfaces';

@Injectable()
export class ClientApiService {
  controllerName = 'client';

  constructor(private http: HttpClient) {}

  getClients() {
    return this.http.get<Client[]>(`/${this.controllerName}`);
  }

  upsert(client: Client) {
    return this.http.post<Client>(`/${this.controllerName}`, client);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`/${this.controllerName}`, {
      params: { id },
    });
  }
}
