import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { CompaniesComponent } from '@app/companies/companies.component';
import { CompaniesListComponent } from '@app/companies/companies-list/companies-list.component';
import { CompaniesFormComponent } from '@app/companies/companies-form/companies-form.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
    data: { title: marker('Companies') },
    children: [
      { path: '', component: CompaniesListComponent, data: { title: marker('Companies List') } },
      { path: 'add-company', component: CompaniesFormComponent, data: { title: marker('Companies Form') } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class CompaniesRoutingModule {}
