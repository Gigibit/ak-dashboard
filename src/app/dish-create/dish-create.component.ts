import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Dish } from '../core/model/dish';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dish-create',
  templateUrl: './dish-create.component.html',
  styleUrls: ['./dish-create.component.css']
})
export class DishCreateComponent implements OnInit {
  dishForm: FormGroup;
  submitted = false;

  
  constructor(
    private dishService: DishService,
    private location: Location,
    private fb: FormBuilder
    ) {
      this.dishForm = this.fb.group({
        name : ['',Validators.required],
        description : ['',Validators.required],
        price : ['', [Validators.pattern(/^\$?[0-9]?((\.[0-9]+)|([0-9]+(\.[0-9]+)?))$/), Validators.required]]
      });
   }

  ngOnInit() {
  }
  goBack(){
    this.location.back()
  }
  onSubmit(){
    
    this.submitted = true
    
    if (this.dishForm.invalid) return
    
    this.dishService.save({
      name :  this.dishForm.get('name').value,
      description: this.dishForm.get('description').value,
      price: this.dishForm.get('price').value
    })
  }


  get f() { return this.dishForm.controls; }


}
