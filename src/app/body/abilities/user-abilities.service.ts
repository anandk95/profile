import { Injectable } from '@angular/core';

@Injectable()
export class UserAbilitiesService {
  private abilitiesInfo = {
    myAbilities: "",
    skills: [
      {
        skillName: "Web Developer",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "Backend Developer",
        proficiency: 5 //"[5 to 0]"
      },
      {
        skillName: "Front End Developer",
        proficiency: 3 //"[5 to 0]"
      },
      // {
      //   skillName: "[Skill name]",
      //   proficiency: 2 //"[5 to 0]"
      // },
      // {
      //   skillName: "[Skill name]",
      //   proficiency: 1 //"[5 to 0]"
      // }
    ],
    languages: [
      {
        languageName: "Angular 4+",
        level: "8",
        proficiency: 5 //"[5 to 0]"
      },
      {
        languageName: "NodeJS",
        level: "9",
        proficiency: 4 //"[5 to 0]"
      },
      {
        languageName: "MongoDB",
        level: "9",
        proficiency: 5 //"[5 to 0]"
      },
      {
        languageName: "TypeScript",
        level: "8",
        proficiency: 4.5 //"[5 to 0]"
      },
      {
        languageName: "CSS",
        level: "8",
        proficiency: 4 //"[5 to 0]"
      }
    ],
    tools: [
      {
        toolName: "Visual Studio Code",
        year: "2018",
        proficiency: 5 //"[5 to 0]"
      },
      {
        toolName: "Sublime",
        year: "2018",
        proficiency: 5 //"[5 to 0]"
      },
      {
        toolName: "Eclipse",
        year: "2018",
        proficiency: 4 //"[5 to 0]"
      },
      // {
      //   toolName: "[Tool name]",
      //   year: "[Used Year Here]",
      //   proficiency: 2 //"[5 to 0]"
      // },
      // {
      //   toolName: "[Tool name]",
      //   year: "[Used Year Here]",
      //   proficiency: 1 //"[5 to 0]"
      // }
    ]
  };

  getAbilitiesInfo() {
    return this.abilitiesInfo;
  }

}
