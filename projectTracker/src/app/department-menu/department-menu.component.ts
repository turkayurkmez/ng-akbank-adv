import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { departments } from '../models/mocks/department.mock';
import { HttpClient } from '@angular/common/http';
import { DepartmentService } from '../services/department.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent {
  //1. departments isimli array, bileşen servisteki get işleminden gelenm dataya subscribe olduğunda dolacak.
  departments:Department[];
  //2. Servisten gelen observable koleksiyon direkt özelliğe atanacak:
  observableDepartments$: Observable<Department[]>

  // constructor(private httpClient: HttpClient){
  // }
  constructor(private departmentService: DepartmentService){}

  ngOnInit():void{
    //1. Subscription: 
   this.departmentService.getDepartments()
                         .subscribe(data=>this.departments = data);

   //alternatif: Observable özellik:
   this.observableDepartments$ = this.departmentService.getDepartments();

                  
  }




}
