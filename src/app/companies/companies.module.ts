import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesFormComponent } from './companies-form/companies-form.component';
import { CompaniesRoutingModule } from '@app/companies/companies-routing.module';
import { SharedModule } from '@shared';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  declarations: [CompaniesComponent, CompaniesListComponent, CompaniesFormComponent],
  imports: [CommonModule, CompaniesRoutingModule, SharedModule, ButtonModule, TooltipModule],
})
export class CompaniesModule {}
