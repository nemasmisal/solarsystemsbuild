import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecPipe } from './pipes/exec.pipe';
import { PasswordValidatorDirective } from './directives/password-validator.directive';

@NgModule({
  declarations: [
    ExecPipe,
    PasswordValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ExecPipe, PasswordValidatorDirective]
})
export class SharedModule { }
