import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private userInfo = {
    name: "Anand A Kulkarni",
    jobTitle: "Full Stack Developer",
    aboutMe: "I am a MEAN Stack Web developer with an experience of 0.5 years",
    profilePicture: "http://i0.wp.com/cdn.techgyd.com/save-whatsapp-profile-picture-image3.jpg?resize=337%2C337",
    location: "Banglore Karnataka",
    email: "anandkulkarni1995@gmail.com",
    devpostAccount: "",
    facebookAccount: "https://www.facebook.com/aanandakulkarni",
    githubAccount: "https://github.com/anandk95",
    googleAccount: "anandkulkarni1995@gmail.com",
    linkedinAccount: "https://www.linkedin.com/in/anand-kulkarni-047a75161/",
    twitterAccount: "",
    otherAccount: ""
  };

  getUserInfo() {
    return this.userInfo;
  }

}
