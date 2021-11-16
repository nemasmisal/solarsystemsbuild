import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

const components = [NavbarComponent, FooterComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
