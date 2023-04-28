import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { APIInterceptorProvider } from './interceptor/api.interceptor';

@NgModule({
  imports: [HttpClientModule, HttpClientJsonpModule],
  providers: [APIInterceptorProvider],
})
export class AfHttpModule {}
