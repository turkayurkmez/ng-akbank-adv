import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'introduce to Angular';
  paragraph:string= 'Bu bizim  ilk paragrafımız...';
  createdDate:string = "Eylül 2023"

  countries:string[] = ['Türkiye','Canada','Netherlands','France'];



}
