import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromBooks from './store/book'
import { Observable } from 'rxjs';
import { IBook } from './interfaces/ibook.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.initDispatch();
    this.initSubscriptions();
  }
  
  title = 'crud-ngrx-example';
  books$: Observable<IBook[]>
  isLoading$: Observable<boolean>


  createNewBook(name:string):void{
    this.store.dispatch(fromBooks.createBook({
      book:{
        id:Math.random(),
        name:name
      }
    }));
  }

  updateExistingBook(book: IBook):void{
    this.store.dispatch(fromBooks.updateBook({book}));
  }

  deleteBook(book: IBook):void{
    this.store.dispatch(fromBooks.deleteBook({book}));
  }

  initDispatch():void{
    this.store.dispatch(fromBooks.getBooks())
  }

  initSubscriptions():void{
    this.books$ = this.store.pipe(select(fromBooks.selectBookList));
    this.isLoading$ = this.store.pipe(select(fromBooks.selectBookIsLoading));
  }
}
