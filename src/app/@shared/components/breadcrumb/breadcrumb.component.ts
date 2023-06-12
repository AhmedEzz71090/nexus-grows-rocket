import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  home: MenuItem | any;

  constructor(public sharedService: SharedService) {}
  ngOnInit() {
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
