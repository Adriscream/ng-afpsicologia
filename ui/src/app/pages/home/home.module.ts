import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardModule } from '@components/dashboard/dashboard.module';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DashboardModule],
})
export class HomeModule {}
