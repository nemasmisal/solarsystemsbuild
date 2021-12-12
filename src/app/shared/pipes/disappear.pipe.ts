import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'disappear',
  pure: false,
})
export class DisappearPipe implements PipeTransform {
  transform(value: ValidationErrors, dirty: boolean | null): unknown {
    if (!dirty || (dirty && value.errors == null)) {
      return true;
    }
    return false;
  }
}
