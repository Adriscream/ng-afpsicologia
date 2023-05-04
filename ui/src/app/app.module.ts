import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AfHttpModule } from './common/http/http.module';
import { ImageCDNModule } from './common/image-cdn/image-cdn.module';
import { StateModule } from './common/store/state.module';
import { AppRoutingModule } from './routing/app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AfHttpModule,
    StateModule,
    AppRoutingModule,
    ImageCDNModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
