import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../core/model/dish';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../_services/dish.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  @Input() dish: Dish
  dishForm: FormGroup;
  submitted = false;

  
  constructor(
    private route: ActivatedRoute,
    private dishService: DishService,
    private location: Location,
    private fb: FormBuilder
    ){ }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishService.getDish(id)
    .subscribe(dish => this.dish = dish);
    this.dishForm = this.fb.group({
      name : ['',Validators.required],
      description : ['',Validators.required],
      price : ['', [Validators.pattern(/^\$?[0-9]?((\.[0-9]+)|([0-9]+(\.[0-9]+)?))$/), Validators.required]]
    });
  }

  goBack(){
    this.location.back()
  }
  onSubmit(){
    
    this.submitted = true
    
    if (this.dishForm.invalid) return
    
    this.dishService.update({
      name :  this.dishForm.get('name').value,
      description: this.dishForm.get('description').value,
      price: this.dishForm.get('price').value
    })
  }

}
