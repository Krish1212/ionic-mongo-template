import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class DishesProvider {

  constructor(public http: HttpClient) {
    
  }
  getdishes(): Observable<Object> {
    return this.http.get('http://localhost:3000/dishes');
  }
  getdish(id:string): Observable<Object> {
    return this.http.get(`http://localhost:3000/dishes/${id}`)
  }
  createdish(dish): Observable<Object> {
    return this.http.post('http://localhost:3000/dishes', {
      name: dish.name,
      day: dish.day,
      quantity: dish.quantity,
      price: dish.price,
      slot: dish.slot
    });
  }

}
