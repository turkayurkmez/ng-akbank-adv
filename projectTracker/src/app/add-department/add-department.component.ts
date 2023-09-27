import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  department: Department = new Department();

  submitForm(form: NgForm){
    console.log('form değeri:',form.value);
    console.log('departmen değeri:',this.department);
    this.department = form.value;

    if (form.invalid) {
      alert('Form hatalı');
    }
  }

}
