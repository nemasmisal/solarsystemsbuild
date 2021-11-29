import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class regEx {
  public static UppercaseConst = /.*[A-Z]+.*/;
  public static LowercaseConst = /.*[a-z]+.*/;
}

export function uppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;  
    return !regEx.UppercaseConst.test(value) ? { uppercaseError: true } : null;
  };
}

export function lowercaseValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;   
    return !regEx.LowercaseConst.test(value) ? { lowercaseError: true } : null;
  };
}


