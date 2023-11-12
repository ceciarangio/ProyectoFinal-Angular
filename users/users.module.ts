import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UsersListComponent } from './user-list/user-list.component';
import { UserLoginComponent } from './user-login/user-login.component';




@NgModule({
  declarations: [
    UserDetailComponent,
    UserRegisterComponent,
    UsersListComponent,
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class UsersModule { }
