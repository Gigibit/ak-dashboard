import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from './dishes/dishes.component';
import { RouterModule, Routes } from '@angular/router';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { NotificationComponent } from './notification/notification.component';
import { DishCreateComponent } from './dish-create/dish-create.component';
import { TablesDispositionComponent } from './tables-disposition/tables-disposition.component';


const routes: Routes = [
  { path: 'dishes', component: DishesComponent },
  { path: 'notifications', component: NotificationComponent },
  { path: 'dish-detail/:id', component: DishDetailComponent },
  { path: 'dish-create', component: DishCreateComponent },
  { path: 'tables-disposition', component: TablesDispositionComponent },

];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
