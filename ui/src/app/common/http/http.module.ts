import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({ imports: [HttpClientModule, HttpClientJsonpModule] })
export class AfHttpModule {}
