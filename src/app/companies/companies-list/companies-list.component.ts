import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import companies from '../companies-list/companies.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent implements OnInit {
  data: any[] = [];
  cols: any[] = [];
  filterCols: any[] = [];
  cid = '';
  constructor(private router: Router, private sharedService: SharedService) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Companies',
        styleClass: 'last-breadcrumb',
      },
    ]);
  }
  ngOnInit() {
    this.cid = this.router.url;
    this.data = companies;
    this.refactorData(this.data);
    this.cols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'companyEmail', header: 'Email' },
      { field: 'companyWebsiteUrl', header: 'Website' },
      { field: 'companyLocation', header: 'Location' },
    ];
    this.filterCols = ['companyName', 'companyLocation'];
  }

  refactorData(data: any[]): any[] {
    data.forEach((product: any) => {});
    return data;
  }

  addCompany() {
    this.router.navigate(['companies/add-company']);
  }
}
