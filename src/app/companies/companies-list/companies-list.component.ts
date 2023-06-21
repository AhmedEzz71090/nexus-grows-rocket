import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import companies from '../companies-list/companies.json';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],
})
export class CompaniesListComponent implements OnInit, OnDestroy {
  alive = true;
  data: any[] = [];
  cols: any[] = [];
  filterCols: any[] = [];
  cid = '';

  constructor(private router: Router, private sharedService: SharedService, private http: HttpClient) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Companies',
        styleClass: 'last-breadcrumb',
      },
    ]);
  }

  ngOnInit() {
    this.cid = this.router.url;
    this.getData();
    this.cols = [
      { field: 'companyName', header: 'Company Name' },
      { field: 'companyEmail', header: 'Email' },
      { field: 'companyWebsiteUrl', header: 'Website' },
      { field: 'companyLocation', header: 'Location' },
    ];
    this.filterCols = ['companyName', 'companyLocation'];
  }

  getData() {
    this.http
      .get('/companies?userId=647494efb209d207043d7135')
      .pipe(takeWhile(() => this.alive))
      .subscribe({
        next: (res: any) => {
          this.refactorData(res);
          this.data = res;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  refactorData(data: any[]): any[] {
    data.forEach((product: any) => {});
    return data;
  }

  addCompany() {
    this.router.navigate(['companies/add-company']);
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
