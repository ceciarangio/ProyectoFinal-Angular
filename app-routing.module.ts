import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UsersListComponent } from './users/user-list/user-list.component';
import { UserLoginComponent } from './users/user-login/user-login.component';


const routes: Routes = [
  {path: 'products-list', component: ProductListComponent},
  {path:'products-list/:id' , component: ProductDetailComponent},
  {path: 'add-product', component: ProductEditComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: 'register', component: UserRegisterComponent},
  { path: 'users', component: UsersListComponent },
  { path: 'login', component: UserLoginComponent },
  {path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
