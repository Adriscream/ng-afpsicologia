import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input } from '@angular/core';
import {
  CalendarEvent,
  Client,
  ProfessionalOffering,
  User,
} from '@lib/interfaces';
import { map } from 'rxjs/operators';

@Component({
  selector: 'af-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @Input()
  user?: User | null;

  @Input()
  clients: Client[] | null = [];

  @Input()
  professionalOfferings: ProfessionalOffering[] | null = [];

  @Input()
  calendarEvents: CalendarEvent[] | null = [];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Clients', cols: 1, rows: 1 },
          { title: 'Services', cols: 1, rows: 1 },
          { title: 'Appointments', cols: 1, rows: 1 },
          { title: 'Invoices', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Clients', cols: 2, rows: 1 },
        { title: 'Services', cols: 1, rows: 1 },
        { title: 'Appointments', cols: 1, rows: 2 },
        { title: 'Invoices', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
