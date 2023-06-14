import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesFormComponent } from './companies-form/companies-form.component';
import { CompaniesRoutingModule } from '@app/companies/companies-routing.module';
import { SharedModule } from '@shared';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { PaginatorModule } from 'primeng/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CompaniesComponent, CompaniesListComponent, CompaniesFormComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    SharedModule,
    ButtonModule,
    TooltipModule,
    PaginatorModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    TranslateModule,
  ],
})
export class CompaniesModule {}
