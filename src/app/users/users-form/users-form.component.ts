import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';
import { transition, trigger, useAnimation } from '@angular/animations';
import { HideAnimation, showAnimation } from '@shared/animations/transform-opacity';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
  animations: [
    trigger('showHide', [
      transition('void => *', [
        useAnimation(showAnimation, {
          params: {
            timings: '300ms ease-in',
            transform: 'translateY(-10%)',
            opacity: '0',
          },
        }),
      ]),
      transition('* => void', [
        useAnimation(HideAnimation, {
          params: {
            timings: '300ms ease-out',
            transform: 'translateY(-10%)',
            opacity: '0',
          },
        }),
      ]),
    ]),
  ],
})
export class UsersFormComponent implements OnInit {
  form = this.fb.group({
    fullName: ['', Validators.required],
    userEmail: ['', Validators.email],
    userRole: [''],
    userType: [''],
    companyName: [''],
    companyWebsiteUrl: [''],
    companyEmail: ['', Validators.email],
    country: [''],
    companyAddress: [''],
    companyDescription: [''],
  });
  roles: any[] = [];
  userTypes: any[] = [];
  countries: any[] = [];
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
      { name: 'Admin', value: 'ADMIN' },
      { name: 'User', value: 'USER' },
    ];
    this.userTypes = [
      { name: 'Exporter', value: 'EXPORTER' },
      { name: 'Importer', value: 'IMPORTER' },
      { name: 'Custom Broker', value: 'CUSTOMS_BROKER' },
    ];
    this.countries = [
      { name: 'Egypt', value: 'EGYPT' },
      { name: 'USA', value: 'USA' },
      { name: 'Canada', value: 'CANADA' },
      { name: 'United Arab Emirates', value: 'UNITED_ARAB_EMIRATES' },
      { name: 'United Kingdom', value: 'UNITED_KINGDOM' },
      { name: 'Saudi Arabia', value: 'SAUDI_ARABIA' },
    ];
  }

  refactorFormValue(formValue: any) {
    formValue.companyProfile = [
      {
        companyEmail: formValue.companyEmail,
        companyDescription: formValue.companyDescription,
        companyWebsiteUrl: formValue.companyWebsiteUrl,
        companyName: formValue.companyName,
        companyLocation: formValue.companyLocation,
        companyAddress: formValue.companyAddress,
      },
    ];

    delete formValue.companyEmail;
    delete formValue.companyDescription;
    delete formValue.companyWebsiteUrl;
    delete formValue.companyName;
    delete formValue.companyLocation;
    delete formValue.companyAddress;

    return formValue;
  }

  addUser() {
    this.refactorFormValue(this.form.value);
  }
}
