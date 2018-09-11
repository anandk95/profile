import { Injectable } from '@angular/core';

@Injectable()
export class UserExperiencesService {
  private experiencesInfo = {
    myExperiences: "10 Months",
    educations: [
      {
        schoolName: "Shaheen",
        startDate: "2011",
        endDate: "2013",
        degreeTitle: "+2",
        certificationDescription: "InterMediate",
        location: "Bidar"
      },
      {
        schoolName: "GNDE College",
        startDate: "2013",
        endDate: "2017",
        degreeTitle: "Bachelor",
        certificationDescription: "B.E(CSE)",
        location: "Bidar"
      },
    ],
    careers: [
      {
        companyName: "PranoTechnosoft",
        startDate: "NOV 2017",
        endDate: "Present",
        jobType: "Developer",
        jobTitle: "Web Developer",
        jobDuty: "BackEnd data Handling",
        location: "Banglore",
        companyLink: "http://pranotechnosoft.com/"
      },
      // {
      //   companyName: "[Company's name here]",
      //   startDate: "[Srart Month Year]",
      //   endDate: "[End Month Year]	",
      //   jobType: "[Job type]",
      //   jobTitle: "[Your job's title here]",
      //   jobDudty: "[Your job's duty here]",
      //   location: "[Location]",
      //   companyLink: "[Company's website]"
      // }
    ],
    certificates: [
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      },
      {
        certificateTitle: "[Certificate title here]",
        imageUrl: "https://images.sampletemplates.com/wp-content/uploads/2015/03/Free-Performance-Certificate-Template.jpg"
      }
    ]
  };

  getExperiencesInfo() {
    return this.experiencesInfo;
  }

}
