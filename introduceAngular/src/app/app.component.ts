import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';
import { fakeItems } from './models/todoItem.mock';

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

  todoItems: TodoItem[] = fakeItems



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
      this.todoItems =fakeItems;
    }

  }

  getButtonText():string{
    return this.isAllTaskShowing ? "Yapılan görevleri gizle": "Tüm görevleri göster";
  }
}
