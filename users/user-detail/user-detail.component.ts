import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/products/models/user';
import { UsersService } from '../users.service';
import { ActivatedRoute, Route } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  users: UserI[] = [];

  constructor( private userService: UsersService, private route: ActivatedRoute, private appComponent: AppComponent) {}

  botonActualizar: boolean = false;
  toggleButton(){
    this.botonActualizar =!this.botonActualizar;
  }

  updateUser: UserI = {
    address:  {
      geolocation:  {
      lat: 0,
      long: 0
      },
      city: '',
      street: '',
      number: 0,
      zipcode: 0
      },
      id: 0,
      email: '',
      username: '',
      password: '',
      name: {
      firstname: '',
      lastname: ''
      },
      phone: 0,
      __v: 0

  }

  userId: number = 0;


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.userService.getUserById(userId).subscribe(user => {
        this.updateUser = user;
      });
    });
  }


  getUserToUpdate(userId: number): void {
    this.userService.getUserById(userId).subscribe((user: UserI) => {
      this.updateUser = user;
    });
  }

  updateUserDetails() {
    this.userService.updateUser(this.updateUser).subscribe(updatedUser => {
      console.log('Usuario actualizado:', updatedUser);
      // Actualizar la interfaz o realizar otras acciones
    });
  }
  }
