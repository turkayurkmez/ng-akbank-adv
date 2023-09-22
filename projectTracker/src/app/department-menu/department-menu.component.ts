import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/department.mock';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent {
  departments:Department[];

  // constructor(private httpClient: HttpClient){
  // }
  constructor(private departmentService: DepartmentService){}

  ngOnInit():void{
   this.departmentService.getDepartments()
                         .subscribe(data=>this.departments = data)
                  
  }


}
