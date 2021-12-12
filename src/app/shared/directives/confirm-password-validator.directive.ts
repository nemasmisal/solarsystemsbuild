import { Directive, Input } from '@angular/core';
import {
  NG_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  NgModel,
} from '@angular/forms';

@Directive({
  selector: '[repeatValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: ConfirmPasswordValidatorDirective,
    },
  ],
})
export class ConfirmPasswordValidatorDirective {


  validate(control: AbstractControl): ValidationErrors | null {
    const confirmPassword = control.value;
    const password =  control.root.get('password')?.value;

    const errors: { [key: string]: boolean | undefined } = {};

    if(confirmPassword!=password){
      errors.confirmPassword=true; 
    }     

    return Object.values(errors).length > 0 ? errors : null;
  }
}
