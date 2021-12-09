import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  constructor() {} 

  register(form: NgForm) {
    const formDate = form.value;
    console.log('FORM VALID:', form.valid);
    
  }

  hasOpacity(obj: any, propertyName: string): boolean {
    if (obj === null || Array.isArray(obj) || typeof obj !== 'object' || !obj.hasOwnProperty(propertyName)) { return false; }
    return true;
  }
}
