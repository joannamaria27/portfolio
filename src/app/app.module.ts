import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { MyPageComponent } from './my-page/my-page.component';
import { EducationPageComponent } from './education-page/education-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MyPageComponent,
    EducationPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
