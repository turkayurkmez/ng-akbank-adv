import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/project.mock';
import { HttpClient } from '@angular/common/http';
import { ProjectsService } from '../services/projects.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  //projects: Project[] = projects
  projects$: Observable<Project[]>
  searchKey: string;

  constructor(private projectService: ProjectsService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.projects$ = this.projectService.getProjects();
    
    this.activeRoute.params.subscribe(routeData => {
      console.log('Gelen id', routeData["id"]);
      this.projects$ = routeData["id"] == undefined ?
        this.projectService.getProjects()
        :
        this.projectService.getProjectsByDepartment(routeData["id"]);
    });
  }



}
