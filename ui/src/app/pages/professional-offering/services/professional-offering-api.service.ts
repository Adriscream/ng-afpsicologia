import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfessionalOffering } from '@lib/interfaces';

@Injectable()
export class ProfessionalOfferingApiService {
  controllerName = 'professional-offering';

  constructor(private http: HttpClient) {}

  getProfessionalOfferings() {
    return this.http.get<ProfessionalOffering[]>(`/${this.controllerName}`);
  }

  upsert(professionalOffering: ProfessionalOffering) {
    return this.http.post<ProfessionalOffering>(
      `/${this.controllerName}`,
      professionalOffering
    );
  }

  delete(id: string) {
    return this.http.delete<boolean>(`/${this.controllerName}`, {
      params: { id },
    });
  }
}
