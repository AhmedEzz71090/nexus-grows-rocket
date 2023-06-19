import { Component, OnInit } from '@angular/core';
import products from '../products-list/products.json';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  version: string | null = environment.version;

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
    this.getData();
    this.cid = this.router.url;
    this.data = products;
    this.refactorData(this.data);
    this.setActions();
    this.cols = [
      { field: 'productName', header: 'Product Name' },
      { field: 'productQuantity', header: 'Quantity' },
      { field: 'productMetric', header: 'Unit' },
      { field: 'productType', header: 'Category' },
      { field: 'productCountryOfOrigin', header: 'Country' },
    ];
    this.filterCols = ['productName', 'productType', 'productCountryOfOrigin'];
  }

  getData() {
    this.http.get('/productsAggregated?userId=64748fc3b209d207043d7128').subscribe({
      next: (res: any) => {
        console.log(res);
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
}
