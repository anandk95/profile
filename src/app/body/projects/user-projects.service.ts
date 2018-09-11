import { Injectable } from '@angular/core';

@Injectable()
export class UserProjectsService {
  private projectsInfo = {
    myProjects: "[Your projects details here]",
    projects: [
      {
        projectTitle: "IBM Suppliers Site",
        projectImageLink: "https://opensource.com/sites/default/files/code4.png",
        projectDescription: "The purpose of this project is to manage all the demand and supplies of IBM and it's Clients, Which was previously done through Mails",
        skillsList: "Web Development and Data Management",
        projectLink: "Under Development"
      },
      {
        projectTitle: "Consultancy WebSite",
        projectImageLink: "https://opensource.com/sites/default/files/code4.png",
        projectDescription: "The Purpose is to create a working website of a Consultancy",
        skillsList: "Angular4, NodeJS, ExpressJS, MongoDB",
        projectLink: "http://www.sunsofttechies.com/#/home/Trainers"
      }
    ]
  };

  getProjectsInfo() {
    return this.projectsInfo;
  }

}
