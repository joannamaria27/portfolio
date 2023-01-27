import { Component, OnInit } from '@angular/core';
import { Project } from '../projects-api/project';
import { ProjectsApiService } from '../projects-api/projects-api.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {
  public isCollapsed = true;
  public projects: Project[] = [];

  constructor(private projectsApi: ProjectsApiService) { }

  ngOnInit(): void {
    this.projectsApi.getProjects().subscribe(p => {
      console.log(p);
      this.projects = p;
    })
  }

  openLink(pdfUrl: string): void {
    window.open(pdfUrl, '_blank');
  }

}
