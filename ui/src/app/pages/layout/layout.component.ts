import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@app/common/user/user.service';
import { Observable } from 'rxjs';
import { filter, map, mergeMap, shareReplay, take } from 'rxjs/operators';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService
      .getUsers()
      .pipe(
        take(1),
        filter((users) => !users.length),
        mergeMap(() =>
          this.userService.create({
            name: 'Angela',
            email: 'afpsi@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date(),
          })
        )
      )
      .subscribe();
  }
}
