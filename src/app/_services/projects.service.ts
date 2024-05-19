import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Housing Location Project", pictures: ["https://gist.github.com/assets/35466676/7ba4349a-63d8-471b-9851-a013a7abaab4","https://gist.github.com/assets/35466676/3e595b43-a21a-465f-bb98-1d8ff919e8b4","https://gist.github.com/assets/35466676/04b8c082-301a-4e81-a444-20f5536709c1"], projectLink: "https://github.com/ahmad-ausaf0/homes-app", liveLink: "https://github.com/ahmad-ausaf0/", summary: "An Angular based vacation rental housing application with search filter using city.", description: `The Angular-based vacation rental housing application is a web application that allows users to search for and book vacation rentals in various cities. The application provides a user-friendly interface with a search filter that allows users to specify their desired city for accommodation.
    The search filter enables users to enter a city name or select from a list of available cities. Upon submitting the search, the application retrieves and displays a list of vacation rental properties available in the specified city.`, tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.TYPESCRIPT]},

    {id: 1, name: "Weather App", pictures: ["https://gist.github.com/assets/35466676/47131ef6-199d-4dd8-be29-ede06c2a6ae6"], projectLink: "https://github.com/ahmad-ausaf0/weather-app", liveLink: "https://ahmad-ausaf0.github.io/weather-app/", summary: "Weather web app instantly fetches detailed weather data, developed using Angular.", description: `This weather app project lets users input a city name and instantly fetches detailed weather data like temperature, "feels like" conditions, humidity, and wind speed. It's all about providing quick, accurate updates to help users plan their day effectively, no matter where they are.`, tags: [Tag.ANGULAR, Tag. HTML, Tag.CSS, Tag.NODEJS]},

    {id: 2, name: "Angular Courses Web Application", pictures: ["https://gist.github.com/assets/35466676/350cf821-e8fd-48b5-a5d0-5a2d2cac28e5","https://gist.github.com/assets/35466676/f6f25c68-eef7-467d-aa85-37db3e19a807","https://gist.github.com/assets/35466676/b8fef995-b15b-4828-8af9-6882a986bcd0"], projectLink: "https://github.com/ahmad-ausaf0/angular-course", liveLink: "https://github.com/ahmad-ausaf0/", summary: "Angular Courses Web Application shows the angular courses card with tags.", description: "This web app uses local server for consuming data coming from api and it is used to show tags, edit the name of the course of any angular course card.", tags: [Tag.ANGULAR, Tag. HTML, Tag.CSS, Tag.TYPESCRIPT]},

    {id: 3, name: "Latest News Web App", pictures: ["https://user-images.githubusercontent.com/35466676/167346919-e62dd513-ea41-4602-b957-b46e0b5a6341.gif"], projectLink: "https://github.com/ahmad-ausaf0/news-app-reactjs", liveLink: "https://github.com/ahmad-ausaf0/", summary: "Latest News Web Application built using React. This app provides users with up-to-date news from various sources.", description: "News Web Application, crafted with React to deliver the most recent news right to your fingertips. Stay informed with the latest updates from diverse sources, covering a wide range of topics.", tags: [Tag.REACT, Tag.NODEJS]},

    {id: 4, name: "Anime Quiz Application", pictures: ["https://gist.github.com/assets/35466676/878de4d2-3f0b-48c9-906b-625a68d2821f","https://gist.github.com/assets/35466676/c1945127-2481-4e01-81e1-6104b845b69e"], projectLink: "https://github.com/ahmad-ausaf0/Quiz_App", liveLink: "https://github.com/ahmad-ausaf0/", summary: "A quiz application featuring anime cartoon questions sourced from the Open Trivia Database API", description: "In this quiz application users can test their knowledge of anime by answering multiple-choice questions across various categories, with colorful visuals and an intuitive interface.", tags: [Tag.HTML, Tag.CSS, Tag.JAVASCRIPT]},

    {id: 5, name: "Social Media Integrated Android App", pictures: ["https://gist.github.com/assets/35466676/645d700d-199b-4430-a86f-e4775936d47c", "https://gist.github.com/assets/35466676/808d04e8-538e-4a54-9353-0c0ee4c5e2d7"], projectLink: "https://github.com/ahmad-ausaf0/TSF-GRIP-Project-2020", liveLink: "https://github.com/ahmad-ausaf0/", summary: "Mobile app developed in java where a user can login with Facebook and Google sign-in (Both).", description: "During my internship with The Sparks Foundation's GRIP program, I created a Social Media Integrated Android application. This app allows users to log in using both Facebook and Google sign-in methods. Upon successful login, the user's details, such as their name, email address, and profile picture, are displayed on the second page of the application.", tags: [Tag.JAVA]}
  ];

  // pictures: ["https://gist.github.com/assets/35466676/6beba1f0-2c02-49dd-a7fe-4a18671cde24"]
  // https://gist.github.com/assets/35466676/ad26fb03-c498-4110-8a19-21305d6ca088 - facebook-pic
  
  constructor() { }

  getProjects() {
    return this.projects;
  }

  getProjectById(id: number) : Project {
    let project = this.projects.find(projectData => projectData.id === id);

    if(project === undefined) {
      throw new TypeError('There is no such project that matches the id: '   + id);
    }

    return project;
  }

  GetProjectsByFilter(filterTags : Tag[]) {
    let filteredProjects : Project[] = [];

    this.projects.forEach(project => {
      let foundAll = true;

      filterTags.forEach(filterTag => {
        if(project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if(foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
