import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';


const products: Product[] = [
  new Product(1, 'A', 10, 0.25),
  new Product(2, 'D', 10, 0.5),
  new Product(3, 'C', 10, 0.15),
  new Product(4, 'B', 10, 0.20),

]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts():Observable<Product[]>{
    return of(products);
  }
}
