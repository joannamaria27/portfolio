import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationPageComponent } from './education-page/education-page.component';
import { MyPageComponent } from './my-page/my-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';

const routes: Routes = [
  { path: '', component: MyPageComponent, },
  { path: 'skills', component: SkillsPageComponent },
  { path: 'education', component: EducationPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
