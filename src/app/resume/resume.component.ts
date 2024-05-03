import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  isWorkExperienceOpen : boolean = false;
  isEducationOpen : boolean = false;
  isCertificationsOpen : boolean = false;
  isSkillsOpen : boolean = false;

  constructor(private titleService : Title, private renderer: Renderer2) { 
    this.titleService.setTitle('Ausaf Ansari - Resume')
  }

  ngOnInit(): void {
  }

  DownLoadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    // link.setAttribute('href', 'https://online.publuu.com/487104/1094068');
    link.setAttribute('href', 'https://publuu.com/flip-book/490690/1103231');
    link.setAttribute('download', 'AusafResume.pdf');
    link.click();
    link.remove();
  }

}
