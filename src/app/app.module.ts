import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { PeopleComponent } from './Components/people/people.component';
import { FamilyComponent } from './Components/family/family.component';
import { UnitsComponent } from './Components/units/units.component';
import { CareersComponent } from './Components/careers/careers.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeopleComponent,
    FamilyComponent,
    UnitsComponent,
    CareersComponent,
    CoursesComponent,
    NotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
