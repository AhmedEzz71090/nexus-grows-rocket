import { Component, OnInit } from '@angular/core';
import users from '@app/users/users-list/Users.json';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  version: string | null = environment.version;

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
    this.data = users;
    this.getData();
    this.refactorData(this.data);
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
    this.http.get('/user?userId=64748fc3b209d207043d7128').subscribe((res: any) => {
      console.log(res);
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
}
