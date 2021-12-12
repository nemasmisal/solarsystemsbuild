import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecPipe } from './pipes/exec.pipe';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { DisappearPipe } from './pipes/disappear.pipe';
import { ConfirmPasswordValidatorDirective } from './directives/confirm-password-validator.directive';

@NgModule({
  declarations: [
    ExecPipe,
    PasswordValidatorDirective,
    DisappearPipe,
    ConfirmPasswordValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ExecPipe, PasswordValidatorDirective,DisappearPipe,ConfirmPasswordValidatorDirective]
})
export class SharedModule { }
