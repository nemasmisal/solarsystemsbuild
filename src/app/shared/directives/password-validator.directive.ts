import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, NgModel } from '@angular/forms';
import { passwordRegex } from '../constants';

@Directive({
  selector: '[ngModel][passwordValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: PasswordValidatorDirective
  }]
})
export class PasswordValidatorDirective {

  @Input() passwordValidator!: NgModel;

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value;  

    const errors: { [key: string]: boolean | undefined } = {};

    if (!passwordRegex.hasAtLeastOneLetter.test(password) || !passwordRegex.hasAtLeastOneDigit.test(password)) {
      errors.hasMixOfLettersAndNumbers = false;
    }
    if (!passwordRegex.hasOneUpperCase.test(password)) {
      errors.hasOneUpperCase = false;
    }
    if (!passwordRegex.hasOneSpecialChar.test(password)) {
      errors.hasOneSpecial = false;
    }

    if (password?.length < 8) {
      errors.hasEnoughLength = false;
    }

    if (Object.values(errors).length > 0) { return errors; }

    return null;
  }

}
