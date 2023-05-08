import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { UserModule } from '@app/common/_user/user.module';
import { ImageCDNModule } from '@app/common/image-cdn/image-cdn.module';
import { CalendarEventStoreModule } from '@pages/calendar/store/calendar.module';
import { ClientStoreModule } from '@pages/client/store/client.module';
import { ProfessionalOfferingStoreModule } from '@pages/professional-offering/store/professional-offering.module';

import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    UserModule,
    ImageCDNModule,
    ClientStoreModule,
    ProfessionalOfferingStoreModule,
    CalendarEventStoreModule,
  ],
  exports: [LayoutComponent],
})
export class AfLayoutModule {}
