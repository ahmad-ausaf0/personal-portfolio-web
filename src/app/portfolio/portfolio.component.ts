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
  javascript: boolean = false;
  react: boolean = false;
  nodejs: boolean = false;
  java: boolean = false;
  csharp: boolean = false;

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

    
    if(this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }

    
    if(this.react) {
      filterTags.push(Tag.REACT);
    }

    if(this.java) {
      filterTags.push(Tag.JAVA);
    }

    
    if(this.csharp) {
      filterTags.push(Tag.CSHARP);
    }

    
    if(this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }

    if(this.typeScript || this.angular || this.javascript || this.react || this.csharp || this.nodejs) {
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
