import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  project : Project = {
    id : 0,
    name : 'Sample Angular App',
    summary : 'Test Summary',
    description : '',
    projectLink : '',
    tags : [Tag.ANGULAR, Tag.JAVASCRIPT],
    pictures : []
  };

  constructor(private titleService : Title) { 
    this.titleService.setTitle('Ausaf Ansari - Portfolio')
  }

  ngOnInit(): void {
  }

}
