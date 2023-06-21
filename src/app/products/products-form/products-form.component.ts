import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-users-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit, OnDestroy {
  alive = true;
  form = this.fb.group({
    productName: ['', Validators.required],
    productType: [''],
    productQuantity: [''],
    productMetric: [''],
    productCountryOfOrigin: [''],
    productDescription: [''],
  });
  types: any[] = [];
  units: any[] = [];
  countries: any[] = [];
  fieldWidth = 'calc(50% - 1rem)';

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Products',
        command: () => {
          this.router.navigate(['/products']);
        },
      },
      {
        label: 'Add Products',
        styleClass: 'last-breadcrumb',
      },
    ]);
  }

  ngOnInit(): void {
    this.types = [
      { name: 'Fruits', value: 'FRUITS' },
      { name: 'Vegetables', value: 'VEGETABLES' },
      { name: 'Other', value: 'OTHER' },
    ];
    this.units = [{ name: 'Kg', value: 'KG' }];
    this.countries = [
      { name: 'Egypt', value: 'EGYPT' },
      { name: 'USA', value: 'USA' },
      { name: 'Canada', value: 'CANADA' },
      { name: 'United Arab Emirates', value: 'UNITED_ARAB_EMIRATES' },
      { name: 'United Kingdom', value: 'UNITED_KINGDOM' },
      { name: 'Saudi Arabia', value: 'SAUDI_ARABIA' },
    ];
  }

  addProduct() {
    const body = this.form.value;
    this.http
      .post('/products?userId=647494efb209d207043d7135', body)
      .pipe(takeWhile(() => this.alive))
      .subscribe({
        next: (res: any) => {
          this.router.navigate(['/products']);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
