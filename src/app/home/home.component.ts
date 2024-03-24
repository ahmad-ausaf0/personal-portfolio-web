import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  featuredProject = {} as Project;

  constructor(private titleService : Title, private projectsService : ProjectsService) { 
    this.titleService.setTitle('Ausaf Ansari - Home')
  }

  ngOnInit(): void {

    this.featuredProject = this.projectsService.getProjectById(0);
  }

}
