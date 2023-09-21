import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';

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

  todoItems: TodoItem[] =
  [
    new TodoItem('Çiçekleri Sula',false),
    new TodoItem('Angular Öğren',false),
    new TodoItem('ASP.NET Core ile API Yaz',true)  
  ];



  getItemsCount():number{
    return this.todoItems.filter(t=>!t.isDone).length;
  }

  isAllTaskShowing: boolean = true;

  filter(): void{
    this.isAllTaskShowing = !this.isAllTaskShowing;
    if (!this.isAllTaskShowing) {
      this.todoItems = this.todoItems.filter(t=>!t.isDone);
    }
    else{
      this.todoItems = [
        new TodoItem('Çiçekleri Sula',false),
        new TodoItem('Angular Öğren',false),
        new TodoItem('ASP.NET Core ile API Yaz',true)  
      ];
    }

  }

  getButtonText():string{
    return this.isAllTaskShowing ? "Yapılan görevleri gizle": "Tüm görevleri göster";
  }
}
