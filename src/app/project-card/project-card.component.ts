import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService : BsModalService) { }

  ngOnInit(): void {
  }

  openProjectModal() {

    this.bsModalRef = this.modalService.show('');
  }

}
