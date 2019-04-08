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
  
  constructor(
    private dishService: DishService,
    private location: Location,
    private fb: FormBuilder
    ) {
      this.dishForm = this.fb.group({
        name : ['',Validators.required],
        description : ['',Validators.required],
        price : ['', [Validators.pattern('/^\d+\.\d{0,2}$/'), Validators.required]]
      });
   }

  ngOnInit() {
  }
  goBack(){
    this.location.back()
  }
  store(){
    if(this.allFieldsAreValids()){
      this.dishService.save({
        name :  this.dishForm.get('name').value,
        description: this.dishForm.get('description').value,
        price: this.dishForm.get('price').value
      })
    }else alert('errore nel form')
  }

  allFieldsAreValids(){
    return true;
  }

}
