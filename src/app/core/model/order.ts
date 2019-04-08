import { Dish } from './dish';
import { Table } from './table';

export interface Order{
    at : Date,
    dishes: Dish[],
    table?: Table,
    payed: boolean
}