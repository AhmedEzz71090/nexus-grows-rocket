import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '@shared/services/shared.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
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
    companyLocation: [''],
    companyAddress: [''],
    companyDescription: [''],
  });
  roles: any[] = [];
  userTypes: any[] = [];
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
    this.roles = [{ name: 'Admin', value: 'ADMIN' }];
    this.userTypes = [{ name: 'Custom Broker', value: 'CUSTOMS_BROKER' }];
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
