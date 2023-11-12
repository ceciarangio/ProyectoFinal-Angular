import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { UserI } from 'src/app/products/models/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  registerUser: UserI = {
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

  constructor(private usersService: UsersService) {}


  onSubmit(): void {
    console.log('Información del usuario a registrar:', this.registerUser);

    this.usersService.addUser(this.registerUser as UserI).subscribe(
      (response: UserI) => {
        console.log('El registro se ha realizado con éxito. Nuevo ID:', response.id);
      },
      (error) => {
        console.error('Error en el registro:', error);
      }
    );
}
}