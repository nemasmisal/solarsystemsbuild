import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatherModule } from 'angular-feather';
import { ChevronUp} from 'angular-feather/icons';

const icons = {
  ChevronUp,
}


const components = [NavbarComponent, FooterComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports:[NavbarComponent,FooterComponent,FeatherModule]
})
export class CoreModule { }
