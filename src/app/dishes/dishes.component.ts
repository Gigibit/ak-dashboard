import { Component, OnInit } from '@angular/core';
import { Dish } from '../core/model/dish';
import { DishService } from '../dish.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes : Dish[]
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe( dishes => this.dishes = dishes ) 
  }

}
