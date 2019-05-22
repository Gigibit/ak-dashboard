import { Component, OnInit } from '@angular/core';
import { Dish } from '../core/model/dish';
import { DishService } from '../_services/dish.service';
import { UserService } from '../_services/user.service';


@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {
  dishes : Dish[]
  constructor(
    private dishService: DishService,
    private userService: UserService
    
    ) { }

  ngOnInit() {
    this.dishService.getDishes().subscribe( dishes => this.dishes = dishes )
    this.userService.getContext().subscribe( context => console.log(context) ) 
  }

}
