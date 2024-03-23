import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project = {} as Project;

  constructor() { }

  ngOnInit(): void {
  }

}
