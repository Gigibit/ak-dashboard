import { Dish } from './dish';

export interface Order{
    at : Date,
    dishes: Dish[],
    tableNumber: number
    payed: boolean
}