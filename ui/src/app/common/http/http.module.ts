import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AuthInterceptorProvider } from '../auth/interceptor/auth.interceptor';
import { APIInterceptorProvider } from './interceptor/api.interceptor';

@NgModule({
  imports: [HttpClientModule, HttpClientJsonpModule],
  providers: [APIInterceptorProvider, AuthInterceptorProvider],
})
export class AfHttpModule {}
