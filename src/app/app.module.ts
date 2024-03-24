import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
    PageNotFoundComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
