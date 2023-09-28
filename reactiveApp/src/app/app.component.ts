import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, filter, map, observable, of, throwError } from 'rxjs';
import { ProductsService } from './services/products.service';
import { Product } from './models/product.model';


const subject = new BehaviorSubject(50);
subject.subscribe(x => console.log(x));
subject.next(25);
subject.next(35);
subject.next(45);






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'reactive-App';

  //observable (reactive):
  title$ = new Observable(observable => {
    setInterval(() => {
      observable.next()
    }, 2000);
  });

  add(): void {
    subject.next(13);
  }



  //observable bir nesnedeki değişikliği subscribe olarak yakalarsınız.
  constructor(private service: ProductsService) {
    //this.changeTitle(this.setTitle);
    this.title$.subscribe(this.setTitle);

    const values = of(4, 'deneme', 6, 7, 8, 9);

    // let square = map((value:number)=>Math.pow(value,2));
    // let squaredNums = square(values);
    // squaredNums.subscribe(value=>console.log(value),
    //                       error=>console.log('hata'),
    //                       ()=>console.log('Bitti'));

    values.pipe(
      filter((n: any) => n % 2 == 1),
      map(x => Math.pow(x, 2)),
      catchError(err => {
        console.log(err);
        return of(`Hata oluştu ${err}`)
      })
    ).subscribe(data => console.log(data),
      err => console.log(err),
      () => console.log('Bitti...')
    );



  }
  ngOnInit(): void {
    this.service.getProducts()
      .pipe(map(x => {
        return x.map(p => {
          p.discountedPrice = p.price * (1 - p.discountRate)
          return p;
        });
      }))
      .subscribe(data => console.log(data));
  }
  //standart:
  changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  //çağrıldığında title değişecek:

  private setTitle = () => {
    const timeStamp = new Date().getSeconds();
    this.title = 'Learn rxjs ' + timeStamp.toString()
  }


}

