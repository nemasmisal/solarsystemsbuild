import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from '../core/core.module';

const components = [RegisterComponent,];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    RouterModule.forRoot([
      {path:'register',component:RegisterComponent},
    ])
  ]
})
export class AuthModule { }
