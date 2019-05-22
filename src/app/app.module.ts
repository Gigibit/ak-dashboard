import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { MatSidenavModule, MatToolbarModule, MatButtonModule, MatIconModule, 
  MatDialogModule, MatFormFieldModule, MatInputModule,
  MatListModule } from '@angular/material';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DishCreateComponent } from './dish-create/dish-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TablesDispositionComponent } from './tables-disposition/tables-disposition.component';
import { TableAddComponent } from './table-add/table-add.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AlertComponent } from './alert/alert.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './_helpers/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    DishDetailComponent,
    NotificationComponent,
    SideNavComponent,
    DishCreateComponent,
    TablesDispositionComponent,
    TableAddComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent
  ],
  entryComponents: [TableAddComponent],
  imports: [
    BrowserModule,
    MatSidenavModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    DragDropModule,
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

