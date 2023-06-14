import { Component, OnInit } from '@angular/core';
import { SharedService } from '@shared/services/shared.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.scss'],
})
export class CompaniesFormComponent implements OnInit {
  form = this.fb.group({
    companyName: [''],
    companyWebsiteUrl: [''],
    companyEmail: ['', Validators.email],
    companyLocation: [''],
    companyAddress: [''],
    companyDescription: [''],
  });
  fieldWidth = 'calc(50% - 1rem)';
  constructor(private sharedService: SharedService, private router: Router, private fb: FormBuilder) {
    sharedService?.breadcrumb?.next([
      {
        label: 'Companies',
        command: () => {
          this.router.navigate(['/companies']);
        },
      },
      {
        label: 'Add Company',
        styleClass: 'last-breadcrumb',
      },
    ]);
  }

  ngOnInit(): void {}

  addCompany() {
    console.log(this.form.value);
  }
}
