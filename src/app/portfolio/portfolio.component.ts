import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(private titleService : Title) { 
    this.titleService.setTitle('Ausaf Ansari - Portfolio')
  }

  ngOnInit(): void {
  }

}
