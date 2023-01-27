import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconPrefix } from '@fortawesome/fontawesome-svg-core';
import { faAngular, faCss3Alt, faHtml5, faJs, faFigma, faGitAlt, faBootstrap, IconName } from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faLanguage, faLaptopCode, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';


const SkillsList = [
  { name: 'Angular', sup: ' ', rate: 2.0, icon: 'angular' as IconName, type: 'fab' as IconPrefix },
  { name: 'JavaScript', sup: '+ VSC', rate: 2.0, icon: 'js' as IconName, type: 'fab' as IconPrefix },
  { name: 'TypeScript', sup: ' ', rate: 2.0, icon: 'code' as IconName, type: 'fas' as IconPrefix },
  { name: 'Git', sup: '+ Github', rate: 2.0, icon: 'git-alt' as IconName, type: 'fab' as IconPrefix },
  { name: 'HTML5', sup: '+ Bootstrap ', rate: 2.0, icon: 'html5' as IconName, type: 'fab' as IconPrefix },
  { name: 'CSS3', sup: ' ', rate: 2.0, icon: 'css3-alt' as IconName, type: 'fab' as IconPrefix },
  { name: 'UX, UI', sup: '+ Adobe XD, Figma', rate: 2.0, icon: 'figma' as IconName, type: 'fab' as IconPrefix },
  { name: 'SQL, RDBMS', sup: '+ Oracle, Microsoft SQL Server', rate: 2.0, icon: 'database' as IconName, type: 'fas' as IconPrefix },
  { name: 'C#, .NET', sup: '+ VS', rate: 2.0, icon: 'laptop-code' as IconName, type: 'fas' as IconPrefix },
  { name: 'Teamwork', sup: ' ', rate: 2.0, icon: 'people-group' as IconName, type: 'fas' as IconPrefix },

];
@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})
export class SkillsPageComponent {

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faAngular,
      faCss3Alt,
      faHtml5,
      faJs,
      faLanguage,
      faFigma,
      faGitAlt,
      faDatabase,
      faPeopleGroup,
      faCode,
      faLaptopCode
    );
  }
  skillsList = SkillsList;

}
