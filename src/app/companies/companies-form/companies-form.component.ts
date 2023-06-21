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
  countries: any[] = [];
  form = this.fb.group({
    companyName: [''],
    companyWebsiteUrl: [''],
    companyEmail: ['', Validators.email],
    country: [''],
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

  ngOnInit(): void {
    this.countries = [
      { name: 'Egypt', value: 'EGYPT' },
      { name: 'USA', value: 'USA' },
      { name: 'Canada', value: 'CANADA' },
      { name: 'United Arab Emirates', value: 'UNITED_ARAB_EMIRATES' },
      { name: 'United Kingdom', value: 'UNITED_KINGDOM' },
      { name: 'Saudi Arabia', value: 'SAUDI_ARABIA' },
    ];
  }

  addCompany() {
    console.log(this.form.value);
  }
}
