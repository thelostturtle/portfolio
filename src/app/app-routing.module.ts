import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './mycomp/home/home.component';
import { AnimationComponent } from './mycomp/animation/animation.component';
import { AboutComponent } from './mycomp/about/about.component';


const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'animation', component: AnimationComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
