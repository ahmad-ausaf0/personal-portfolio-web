import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  // project : Project = {
  //   id : 0,
  //   name : 'Sample Angular App',
  //   summary : 'Test Summary',
  //   description : '',
  //   projectLink : '',
  //   tags : [Tag.ANGULAR, Tag.JAVASCRIPT],
  //   pictures : []
  // };

  projects = {} as Project[];

  iCollapsed: boolean = true;
  typeScript: boolean = false;
  angular: boolean = false;

  filtering: boolean = false;

  constructor(private titleService : Title, private projectsService : ProjectsService) { 
    this.titleService.setTitle('Ausaf Ansari - Portfolio')
  }

  ngOnInit(): void {

    this.projects = this.projectsService.getProjects();
  }

  Filter() {

    let filterTags: Tag[] = [];
    if(this.typeScript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }

    if(this.typeScript || this.angular) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }
    this.projects = this.projectsService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {

    this.typeScript = false;
    this.angular = false;
    
    this.filtering = false;
    this.projects = this.projectsService.getProjects();
  }

}
