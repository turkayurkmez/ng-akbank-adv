import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }

  url: string = 'https://localhost:7125/api/Departments';

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url)
      .pipe(catchError((err: HttpErrorResponse) => {
        console.log(err.message);
        return throwError(() => new Error(err.statusText))
      }));
  }

  createNewDepartment(department: Department): Observable<Department> {

    let option = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authentication': 'Basic '+btoa('turkay:123')
      })
    }



    return this.httpClient.post(this.url, department, option)
      .pipe(catchError((err: HttpErrorResponse) => {
        console.log(err.message);
        return throwError(() => new Error(err.statusText))
      }));

  }
}
