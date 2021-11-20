import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';


const components = [NavbarComponent, FooterComponent, NavbarHomeComponent];

@NgModule({
  declarations: [
    ...components,    
  ],
  imports: [   
    CommonModule,
        
  ],
  exports:[NavbarComponent,FooterComponent,NavbarHomeComponent]
})
export class CoreModule { }
