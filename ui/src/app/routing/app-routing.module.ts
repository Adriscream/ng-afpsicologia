import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/common/auth/guard/auth.guard';
import { HomeComponent } from '@pages/home/home.component';
import { HomeModule } from '@pages/home/home.module';
import { LayoutComponent } from '@pages/layout/layout.component';
import { AfLayoutModule } from '@pages/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('@pages/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'client',
        loadChildren: () =>
          import('@pages/client/client.module').then((m) => m.ClientModule),
      },
      {
        path: 'service',
        loadChildren: () =>
          import(
            '@pages/professional-offering/professional-offering.module'
          ).then((m) => m.ProfessionalOfferingModule),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('@pages/calendar/calendar.module').then(
            (m) => m.CalendarModule
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AfLayoutModule, HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
