import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent { 

  @ViewChild('form')
  registerForm!:NgForm;

  constructor() {} 

  register(form: NgForm) {
    const formDate = form.value;    
    this.registerForm.reset();
  }

  hasOpacity(obj: any, propertyName: string): boolean {
    if (obj === null || Array.isArray(obj) || typeof obj !== 'object' || !obj.hasOwnProperty(propertyName)) { return false; }
    return true;
  }
}
