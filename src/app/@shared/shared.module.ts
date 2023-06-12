import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { TableComponent } from '@shared/components/table/table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [TranslateModule, CommonModule, TableModule, ButtonModule, NgbTooltipModule],
  declarations: [LoaderComponent, TableComponent],
  exports: [LoaderComponent, TableComponent],
})
export class SharedModule {}
