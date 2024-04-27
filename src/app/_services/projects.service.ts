import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Housing Location Project", pictures: ["https://gist.github.com/assets/35466676/7ba4349a-63d8-471b-9851-a013a7abaab4","https://gist.github.com/assets/35466676/3e595b43-a21a-465f-bb98-1d8ff919e8b4","https://gist.github.com/assets/35466676/04b8c082-301a-4e81-a444-20f5536709c1"], projectLink: "https://github.com/ahmad-ausaf0/homes-app", summary: "An Angular based vacation rental housing application with search filter using city.", description: `The Angular-based vacation rental housing application is a web application that allows users to search for and book vacation rentals in various cities. The application provides a user-friendly interface with a search filter that allows users to specify their desired city for accommodation.
    The search filter enables users to enter a city name or select from a list of available cities. Upon submitting the search, the application retrieves and displays a list of vacation rental properties available in the specified city.`, tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS, Tag.TYPESCRIPT]},
    {id: 1, name: "Sample Angular App", pictures: ["../../assets/Imgur (2).png","../../assets/Imgur (1).png","../../assets/Imgur (3).png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.PYTHON, Tag.TYPESCRIPT, Tag.NODEJS]},
    {id: 2, name: "Sample .Net App", pictures: ["../../assets/Imgur (2).png","../../assets/Imgur (1).png","../../assets/Imgur (3).png"], projectLink: "//www.github.com", summary: "Fullstack web app developed using React and ASP.NET", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT ,Tag.CSHARP, Tag.TYPESCRIPT]},
    {id: 3, name: "Web API Project", pictures: ["../../assets/Imgur (2).png","../../assets/Imgur (1).png","../../assets/Imgur (3).png"], projectLink: "//www.github.com", summary: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.CSHARP, Tag.NODEJS]},
    {id: 4, name: "Chrome Extension", pictures: ["../../assets/Imgur (2).png","../../assets/Imgur (1).png","../../assets/Imgur (3).png"], projectLink: "//www.github.com", summary: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.JAVASCRIPT]},
    {id: 5, name: "Mobile App", pictures: ["../../assets/Imgur (2).png","../../assets/Imgur (1).png","../../assets/Imgur (3).png"], projectLink: "//www.github.com", summary: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.REACT]}
  ];
  
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
