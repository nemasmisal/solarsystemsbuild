import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../core/core.module';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [HomeComponent, ProjectsComponent],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
    ]),
  ],
})
export class DashboardModule {}
