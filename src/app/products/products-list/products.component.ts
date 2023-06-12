import { Component, OnInit } from '@angular/core';
import products from '../products-list/products.json';
import { environment } from '@env/environment';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  version: string | null = environment.version;

  data: any[] = [];
  cols: any[] = [];
  filterCols: any[] = [];
  cid = '';
  constructor(private router: Router, private sharedService: SharedService) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Products',
        styleClass: 'last-breadcrumb',
      },
    ]);
  }

  ngOnInit() {
    this.cid = this.router.url;
    this.data = products;
    this.refactorData(this.data);
    this.cols = [
      { field: 'productName', header: 'Product Name' },
      { field: 'productQuantity', header: 'Quantity' },
      { field: 'productMetric', header: 'Unit' },
      { field: 'productType', header: 'Category' },
      { field: 'productCountryOfOrigin', header: 'Country' },
    ];
    this.filterCols = ['productName', 'productType', 'productCountryOfOrigin'];
  }

  refactorData(data: any[]): any[] {
    data.forEach((product: any) => {});
    return data;
  }
}
