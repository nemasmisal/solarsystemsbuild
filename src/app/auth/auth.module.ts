import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';

const components = [RegisterComponent,];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'register',component:RegisterComponent},
    ])
  ]
})
export class AuthModule { }
