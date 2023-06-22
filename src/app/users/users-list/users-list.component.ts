import { Component, OnDestroy, OnInit } from '@angular/core';
import users from '@app/users/users-list/Users.json';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  alive = true;
  data: any[] = [];
  cols: any[] = [];
  filterCols: any[] = [];
  cid = '';
  constructor(private router: Router, private sharedService: SharedService, private http: HttpClient) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Users',
        styleClass: 'last-breadcrumb',
      },
    ]);
  }

  ngOnInit() {
    this.cid = this.router.url;
    this.getData();
    setTimeout(() => {
      this.cols = [
        { field: 'fullName', header: 'Name' },
        { field: 'userRole', header: 'Role' },
        { field: 'userType', header: 'Type' },
        { field: 'userEmail', header: 'Email' },
        { field: 'companyName', header: 'Company' },
      ];
    }, 0);
    this.filterCols = ['fullName', 'userType', 'companyName'];
  }

  getData() {
    this.http
      .get('/user?userId=647494efb209d207043d7135')
      .pipe(takeWhile(() => this.alive))
      .subscribe((res: any) => {
        this.refactorData(res);
        this.data = res;
      });
  }

  refactorData(data: any[]): any[] {
    data.forEach((product: any) => {
      product.companyName = product.companyProfile[0].companyName;
    });
    return data;
  }

  addUser() {
    this.router.navigate(['/users/add-user']).then((r) => {});
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
