import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const components = [RegisterComponent];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent },
    ])
  ]
})
export class AuthModule { }
