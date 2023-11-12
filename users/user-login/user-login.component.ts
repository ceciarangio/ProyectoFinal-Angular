import { AuthService } from '../auth.service';

import { Component, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: '../user-login/user-login.component.html',
  styleUrls: ['../user-login/user-login.component.scss']
})
export class UserLoginComponent {

  username: any = "";
  password: string = "";

  @Output() loginSuccess = new EventEmitter<boolean>();

constructor(private authService: AuthService, private usersService: UsersService, private router: Router){}

onSubmit(): void {
  console.log('Intento de inicio de sesión:', this.username, this.password);
  this.authService.login(this.username, this.password).subscribe(
    (response: {id?: any, token?: any }) => {
      console.log(response);

      if (response) {

        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.id);
        console.log("El login se ha realizado con éxito", response);
        this.loginSuccess.emit(true);
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 500);
        alert("Login correcto.\n Volviendo a la página principal");
      } else {
        console.error("El login no es correcto");
        alert("Usuario y/o contraseña incorrecto");
      }
    },
    error => {
      console.error("Error en el login", error);
      alert("Error en el inicio de sesión");
    }
  );
}

buttonTest(): void {
  this.usersService.getAllUsers().subscribe(e =>{
    console.log(e);

  })
}

}