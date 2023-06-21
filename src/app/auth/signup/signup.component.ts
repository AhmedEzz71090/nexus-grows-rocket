import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    email: ['', Validators.required],
    password: [''],
    phoneNumber: [''],
    displayName: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
  signup() {
    console.log(this.signupForm.value);
  }
}
