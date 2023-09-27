import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Observable } from 'rxjs';
import { Department } from '../models/department.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private builder: FormBuilder, private departmentService: DepartmentService) { }
  ngOnInit(): void {

    this.departments$ = this.departmentService.getDepartments();

    this.addProjectForm = this.builder.group({
      name: ['', [Validators.required,
      Validators.minLength(3)
      ]],
      description: ['', Validators.required],
      departmentId: ['', Validators.required]
    });
  }

  departments$ : Observable<Department[]>
  addProjectForm: FormGroup;

  checkName(): boolean | undefined {

    let field = this.addProjectForm.get('name');
    return field?.hasError('required') &&
      field?.dirty
  }

  chackNameMinLength(): boolean | undefined {

    let field = this.addProjectForm.get('name');
    return field?.hasError('minLength') &&
      field?.dirty
  }

  checkDescription(): boolean | undefined {

    let field = this.addProjectForm.get('description');
    return field?.hasError('required') &&
      field?.dirty
  }

  checkDepartment(): boolean | undefined {

    let field = this.addProjectForm.get('departmentId');
    return field?.hasError('required') &&
      field?.untouched
  }

  addProject() {
    console.log(this.addProjectForm.valid)
    if (this.addProjectForm.valid) {
      console.log("proje eklendi");
    }
  }

}
