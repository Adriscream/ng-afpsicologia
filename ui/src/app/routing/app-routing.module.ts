import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@pages/home/home.component';
import { HomeModule } from '@pages/home/home.module';
import { LayoutComponent } from '@pages/layout/layout.component';
import { AfLayoutModule } from '@pages/layout/layout.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AfLayoutModule, HomeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
