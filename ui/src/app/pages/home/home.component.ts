import { Component } from '@angular/core';
import { UserFacade } from '@app/common/store/user/user.facade';
import { CalendarEventFacade } from '@pages/calendar/store/calendar.facade';
import { ClientFacade } from '@pages/client/store/client.facade';
import { ProfessionalOfferingFacade } from '@pages/professional-offering/store/professional-offering.facade';

@Component({
  selector: 'af-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(
    public userFacade: UserFacade,
    public clientFacade: ClientFacade,
    public professionalOfferingFacade: ProfessionalOfferingFacade,
    public calendarEventFacade: CalendarEventFacade
  ) {}
}
