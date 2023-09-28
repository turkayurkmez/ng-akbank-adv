import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { NgForm } from '@angular/forms';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  department: Department = new Department();

  constructor(private departmentService: DepartmentService) { }

  submitForm(form: NgForm) {

    if (form.invalid) {
      alert('Form hatalı');
    }
    else {
      console.log('form değeri:', form.value);
      console.log('departmen değeri:', this.department);
      this.department = form.value;
      this.departmentService.createNewDepartment(this.department).subscribe(data=>console.log('yeni departman eklendi....',data));
      
    }
  }

}
