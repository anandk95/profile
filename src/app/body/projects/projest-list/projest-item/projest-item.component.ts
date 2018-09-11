import { Component, OnInit } from '@angular/core';
import { PageService } from './../../../../page.service';
import { UserProjectsService } from './../../user-projects.service';

@Component({
  selector: 'app-projest-item',
  templateUrl: './projest-item.component.html',
  styleUrls: ['./projest-item.component.css']
})
export class ProjestItemComponent implements OnInit {
  private projectInfo;
  private pageInfo;

  constructor(private userProjectsService: UserProjectsService, private pageService: PageService) { }

  ngOnInit() {
    this.projectInfo = this.userProjectsService.getProjectsInfo();
    this.pageInfo = this.pageService.getPageInfo();
    // document.getElementById("projects").style.backgroundColor = this.pageInfo['projectsBackgroundColor'];
  }
}
