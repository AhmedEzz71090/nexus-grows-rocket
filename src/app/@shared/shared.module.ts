import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { TableComponent } from '@shared/components/table/table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuModule } from 'primeng/menu';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    TableModule,
    ButtonModule,
    NgbTooltipModule,
    BreadcrumbModule,
    MenuModule,
    InputTextModule,
  ],
  declarations: [LoaderComponent, TableComponent, BreadcrumbComponent],
  exports: [LoaderComponent, TableComponent, BreadcrumbComponent],
})
export class SharedModule {}
