import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerComponent } from './timer/timer.component';

const routes: Routes =[
  {path:'',pathMatch:'full',redirectTo:'/home'}, 
  {path:'timer',component:TimerComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
