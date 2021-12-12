import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exec'
})
export class ExecPipe implements PipeTransform {

  transform<T, F>(value: T, func: (val: T, ...other: F[]) => any, ...otherArgs: F[]): unknown {
    return func(value, ...otherArgs);
  }

}
