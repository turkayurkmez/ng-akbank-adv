import { Component } from '@angular/core';
import { Project } from '../models/project.model';
import { projects } from '../models/mocks/project.mock';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent {
  projects: Project[] = projects
  searchKey: string;
}
