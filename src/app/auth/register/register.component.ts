import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators, FormControl, NgForm} from '@angular/forms';
import {uppercaseValidator,lowercaseValidator} from '../../shared/validator/valid-uppercase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  // form = this.fb.group({
  //   region: ['Select region'],
  //   email: [
  //     '',
  //     {
  //       validators: [
  //         Validators.required,
  //         uppercaseValidator(),
  //         lowercaseValidator(),
  //       ],
  //       asyncValidators: [],
  //       updateOn: 'blur',
  //     },
  //   ],
  //   password: [
  //     '',
  //     {
  //       validators: [
  //         Validators.required,
  //         uppercaseValidator(),
  //         lowercaseValidator(),
  //       ],
  //       updateOn: 'blur',
  //     },
  //   ],

  //   confirmPassword: [''],
  // });

  constructor() {}

  // get f() {
  //   return this.form.controls;
  // }

  // get email() {
  //   return this.form.controls['email'];
  // }
  // get password() {
  //   return this.form.controls['password'];
  // }

  register(form: NgForm) {
    const formDate = form.value;
    console.log('FORM VALID:', form.valid);
    
  }

  hasOpacity(obj: any, propertyName: string): boolean {
    if (obj === null || Array.isArray(obj) || typeof obj !== 'object' || !obj.hasOwnProperty(propertyName)) { return false; }
    return true;
  }
}
