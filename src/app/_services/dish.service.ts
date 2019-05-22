import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DISHES } from '../mock/mock-dish';
import { Dish } from '../core/model/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  dishes = DISHES
  constructor() { }
  
  getDishes(): Observable<Dish[]>{
    return of(this.dishes)
  }
  getDish(id: String){
    return of(this.dishes.find( dish=> dish.id === id))
  }
  
  save(dish:Dish):Observable<Boolean>{
    dish.id = Math.random().toString()
    this.dishes.push(dish)
    return of(true)
  }
  update(dish:Dish){
    return of(true)
  }

}
