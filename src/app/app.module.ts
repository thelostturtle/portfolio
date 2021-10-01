import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './mycomp/home/home.component';
import { HeaderComponent } from './mycomp/header/header.component';
import { AboutComponent } from './mycomp/about/about.component';
import { SkillsComponent } from './mycomp/skills/skills.component';
import { AnimationComponent } from './mycomp/animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
