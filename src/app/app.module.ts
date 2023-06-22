import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './main/navbar/navbar.component';
import { MyPageComponent } from './my-page/my-page.component';
import { EducationPageComponent } from './education-page/education-page.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { AppComponent } from './app.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ProjectOneComponent } from './project-one/project-one.component';
import { ProjectTwoComponent } from './project-two/project-two.component';
import { ProjectThreeComponent } from './project-three/project-three.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyPageComponent,
    EducationPageComponent,
    SidebarComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    ContactPageComponent,
    ProjectOneComponent,
    ProjectTwoComponent,
    ProjectThreeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
