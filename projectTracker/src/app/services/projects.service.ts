import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  constructor(private httpClient: HttpClient) { }

  url: string = 'https://localhost:7125/api/Projects'

  getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.url)
      .pipe(catchError((err: HttpErrorResponse) => {
        console.table(err);
        return throwError(() => new Error(err.statusText));
      }));
  }

  getProjectsByDepartment(departmentId: number):Observable<Project[]>{

    return this.httpClient.get<Project[]>(this.url)
    .pipe(catchError((err: HttpErrorResponse) => {
      console.table(err);
      return throwError(() => new Error(err.statusText));
    }));
  }

}
