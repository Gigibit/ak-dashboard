import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from './dishes/dishes.component';
import { RouterModule, Routes } from '@angular/router';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { NotificationComponent } from './notification/notification.component';
import { DishCreateComponent } from './dish-create/dish-create.component';
import { TablesDispositionComponent } from './tables-disposition/tables-disposition.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'dishes', component: DishesComponent, canActivate: [AuthGuard] },
  { path: 'notifications', component: NotificationComponent, canActivate: [AuthGuard]  },
  { path: 'dish-detail/:id', component: DishDetailComponent, canActivate: [AuthGuard]  },
  { path: 'dish-create', component: DishCreateComponent, canActivate: [AuthGuard]  },
  { path: 'tables-disposition', component: TablesDispositionComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
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
