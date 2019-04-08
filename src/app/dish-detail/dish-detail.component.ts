import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../core/model/dish';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../dish.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  @Input() dish: Dish
  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
  this.dishService.getDish(id)
    .subscribe(dish => this.dish = dish);
  }

  goBack(): void {
    this.location.back();
  }
}
