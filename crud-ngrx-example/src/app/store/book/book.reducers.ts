import { on, createReducer } from "@ngrx/store";
import { IBookState } from "./book.model";
import * as fromBooks from './index';

export const initalBookStore : IBookState = {
    isLoading: false,
    books:[]   
}

const reducer = createReducer<IBookState>(
    initalBookStore,
    on(fromBooks.getBooks,(state)=>{
        return {
            ...state,
            isLoading: true 
        };
    }),

    on(fromBooks.getBooksSuccess,(state)=>{
        return {
            ...state,
            isLoading: false,        
        };
    })
    


)