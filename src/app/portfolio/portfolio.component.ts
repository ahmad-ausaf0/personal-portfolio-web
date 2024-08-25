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


  projects = {} as Project[];

  iCollapsed: boolean = true;
  typeScript: boolean = false;
  angular: boolean = false;
  javascript: boolean = false;
  react: boolean = false;
  nodejs: boolean = false;
  java: boolean = false;
  csharp: boolean = false;
  firebase: boolean = false;

  filtering: boolean = false;
  projectsNotFound: boolean = false;

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

    if(this.firebase) {
      filterTags.push(Tag.FIREBASE);
    }

    if(this.typeScript || this.angular || this.javascript || this.react || this.csharp || this.nodejs || this.firebase) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }
    this.projects = this.projectsService.GetProjectsByFilter(filterTags);
    if (this.projects.length === 0) {
      this.projectsNotFound = true;
    } else {
      this.projectsNotFound = false;
    }
  }

  ResetFilters() {

    this.typeScript = false;
    this.angular = false;
    this.javascript = false;
    this.react = false;
    this.nodejs = false;
    this.java = false;
    this.csharp = false;
    this.filtering = false;
    this.firebase = false;
    this.projectsNotFound = false;
    this.projects = this.projectsService.getProjects();
  }

}
