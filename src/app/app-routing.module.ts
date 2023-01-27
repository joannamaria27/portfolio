import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationPageComponent } from './education-page/education-page.component';
import { MyPageComponent } from './my-page/my-page.component';

const routes: Routes = [
  { path: '', component: MyPageComponent, },
  { path: 'education', component: EducationPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
