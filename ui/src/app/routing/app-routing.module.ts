import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/common/auth/guard/auth.guard';
import { TreeModule } from '@app/components/tree/tree.module';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { DashboardModule } from '@components/dashboard/dashboard.module';
import { DragDropComponent } from '@components/drag-drop/drag-drop.component';
import { AfDragDropModule } from '@components/drag-drop/drag-drop.module';
import { TableComponent } from '@components/table/table.component';
import { TableModule } from '@components/table/table.module';
import { TreeComponent } from '@components/tree/tree.component';
import { ClientModule } from '@pages/client/client.module';
import { HomeComponent } from '@pages/home/home.component';
import { HomeModule } from '@pages/home/home.module';
import { LandingComponent } from '@pages/landing/landing.component';
import { LandingModule } from '@pages/landing/landing.module';
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
    component: LandingComponent,
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
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'tree',
        component: TreeComponent,
      },
      {
        path: 'drag-drop',
        component: DragDropComponent,
      },
      {
        path: 'client',
        loadChildren: () =>
          import('@pages/client/client.module').then((m) => m.ClientModule),
      },

      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AfLayoutModule,
    HomeModule,
    LandingModule,
    TableModule,
    DashboardModule,
    TreeModule,
    AfDragDropModule,
    ClientModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
