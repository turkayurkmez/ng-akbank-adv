import { Component, Input } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  //bu bileşen, göstereceği görevleri Parent bileşeninden alır.
  @Input() tasks?: Task[]

  
}
