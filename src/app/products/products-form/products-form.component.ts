import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss'],
})
export class ProductsFormComponent implements OnInit {
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
  fieldWidth = 'calc(50% - 1rem)';

  constructor(private sharedService: SharedService, private router: Router, private fb: FormBuilder) {
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
      { name: 'Fruits', value: 'fruits' },
      { name: 'Vegetables', value: 'vegs' },
    ];
    this.units = [
      { name: 'KG', value: 'kg' },
      { name: 'Ton', value: 'ton' },
    ];
  }

  addProduct() {
    console.log(this.form.value);
  }
}
