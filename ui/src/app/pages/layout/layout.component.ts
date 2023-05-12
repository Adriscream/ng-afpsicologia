import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@app/common/auth/auth.service';
import { UserFacade } from '@app/common/store/user/public-api';
import { CalendarEventFacade } from '@pages/calendar/store/calendar.facade';
import { ClientFacade } from '@pages/client/store/client.facade';
import { ProfessionalOfferingFacade } from '@pages/professional-offering/store/professional-offering.facade';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'af-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  today = new Date();

  constructor(
    private breakpointObserver: BreakpointObserver,
    public userFacade: UserFacade,
    public authService: AuthService,
    private clientFacade: ClientFacade,
    private professionalOfferingFacade: ProfessionalOfferingFacade,
    private calendarEventFacade: CalendarEventFacade,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getClients();
    this.getProfessionalOfferings();
    this.getCalendarEvents();
  }

  private getClients() {
    this.clientFacade.getClients();
  }

  private getProfessionalOfferings() {
    this.professionalOfferingFacade.getProfessionalOfferings();
  }

  private getCalendarEvents() {
    this.calendarEventFacade.getCalendarEvents();
  }

  signOut() {
    this.authService.singOut().subscribe(() => {
      this.router.navigate(['/landing']);
    });
  }
}
