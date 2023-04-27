import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  exports: [TableComponent],
})
export class TableModule {}
