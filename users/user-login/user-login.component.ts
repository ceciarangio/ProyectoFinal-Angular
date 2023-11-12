import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

constructor(private usersService: UsersService, private router: Router){}

onSubmit(): void {
  this.usersService.login(this.username, this.password).subscribe((e: {id: any, token: string}) => {
    console.log("ID de usuario obtenido:", e.id);
    localStorage.setItem('token', e.token);
    localStorage.setItem('userId', e.id);
    console.log("El login se ha realizado con éxito", e);
    this.loginSuccess.emit(true)

  },
  error => {
    console.error("El login no es correcto", error);
    alert("Usuario y/o contraseña incorrecto");
  }
  )
}



}