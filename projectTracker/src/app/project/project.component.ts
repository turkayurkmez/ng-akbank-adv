import { AfterContentChecked, Component, Input } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements AfterContentChecked  {
  @Input('current') project?: Project;

  incompletedTasksCount?:number;

  constructor(){
   
  }
  ngAfterContentChecked(): void {
    this.incompletedTasksCount = this.project?.tasks?.filter(t=>!t.isDone).length;
  }


  
}
