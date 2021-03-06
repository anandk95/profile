import { Injectable } from '@angular/core';

@Injectable()
export class PageService {
  private pageInfo = {
    backgroundImage: "http://www.schoolsplus.co.uk/wp-content/uploads/2017/06/technology.jpg",
    showHeader: true,
    showProfile: true,
    profileBackgroundColor: "white",
    showExperiences: true,
    experiencesBackgroundColor: "rgb(252, 243, 207)",
    showAbilities: true,
    abilitiesBackgroundColor: "white",
    showProjects: true,
    projectsBackgroundColor: "rgb(252, 243, 207)",
    showAwards: false,
    awardsBackgroundColor: "white",
    showContact: true,
    contactBackgroundColor: "rgb(66, 73, 73)",
    resumeTitle: "Name is Anand , If you are looking for Web developer then i' am your man",
    projectLink: "https://github.com/anandk95"
  };

  getPageInfo() {
    return this.pageInfo;
  }

}
