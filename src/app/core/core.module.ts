import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';

const components = [NavbarComponent, FooterComponent, LandingComponent];

@NgModule({
  declarations: [
    ...components,   
  ],
  imports: [
    CommonModule,

  ],
  exports: [...components]
})
export class CoreModule { }
