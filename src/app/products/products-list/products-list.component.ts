import { Component, OnDestroy, OnInit } from '@angular/core';
import products from '../products-list/products.json';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  alive = true;
  data: any[] = [];
  cols: any[] = [];
  filterCols: any[] = [];
  cid = '';
  actions: any = [];
  row: any = {};

  constructor(private router: Router, private sharedService: SharedService, private http: HttpClient) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Products',
        styleClass: 'last-breadcrumb',
      },
    ]);
  }

  ngOnInit() {
    this.setCols();
    this.setActions();
    this.setFilters();
    this.getData();
    this.cid = this.router.url;
  }

  setCols() {
    this.cols = [
      { field: 'productName', header: 'Product Name' },
      { field: 'productQuantity', header: 'Quantity' },
      { field: 'productMetric', header: 'Unit' },
      { field: 'productType', header: 'Category' },
      { field: 'productCountryOfOrigin', header: 'Country' },
    ];
  }

  setFilters() {
    this.filterCols = ['productName', 'productType', 'productCountryOfOrigin'];
  }

  getData() {
    this.http
      .get('/productsByUserId?userId=647494efb209d207043d7135')
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

  navToAddProduct() {
    this.router.navigate(['/products/add-product']).then((r) => {});
  }

  setActions() {
    this.actions = [
      {
        label: 'View Details',
        icon: 'pi pi-eye',
        command: () => {
          this.router.navigate(['/products/product-details']).then((r) => {});
        },
      },
    ];
  }

  openActionsMenu(e: any) {
    this.row = e;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
