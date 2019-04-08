import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DISHES } from './mock/mock-dish';
import { Dish } from './core/model/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {
  constructor() { }
  
  getDishes(){
    return of(DISHES)
  }
  getDish(id: number){
    return of(DISHES.find( dish=> dish.id === id))
  }
  
  save(dish:Dish){
    return of(true)
  }


}
