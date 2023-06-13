import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  form = this.fb.group({
    productName: ['', Validators.required],
    productType: [''],
    productQuantity: [''],
    productMetric: [''],
    productCountryOfOrigin: [''],
    productDescription: [''],
  });
  roles: any[] = [];
  units: any[] = [];
  fieldWidth = 'calc(50% - 1rem)';

  constructor(private sharedService: SharedService, private router: Router, private fb: FormBuilder) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Users',
        command: () => {
          this.router.navigate(['/users']);
        },
      },
      {
        label: 'Add User',
        styleClass: 'last-breadcrumb',
      },
    ]);
  }

  ngOnInit(): void {
    this.roles = [
      { name: 'Fruits', value: 'fruits' },
      { name: 'Vegetables', value: 'vegs' },
    ];
    this.units = [
      { name: 'KG', value: 'kg' },
      { name: 'Ton', value: 'ton' },
    ];
  }

  addUser() {
    console.log(this.form.value);
  }
}
