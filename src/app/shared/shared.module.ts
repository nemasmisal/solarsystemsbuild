import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExecPipe } from './pipes/exec.pipe';
import { PasswordValidatorDirective } from './directives/password-validator.directive';
import { DisappearPipe } from './pipes/disappear.pipe';

@NgModule({
  declarations: [
    ExecPipe,
    PasswordValidatorDirective,
    DisappearPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ExecPipe, PasswordValidatorDirective,DisappearPipe]
})
export class SharedModule { }
