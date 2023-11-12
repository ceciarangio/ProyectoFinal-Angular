import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'proyecto-final';

  currentRoute = '';


  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });


  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getUserId(): number | null {
    const userId = localStorage.getItem('userId');
    return userId ? +userId : null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId'); // Elimina el ID del usuario autenticado
  }

  viewProfile(): void {
    // Lógica para ver el perfil del usuario
    // Puedes navegar a la página de perfil u otra lógica que prefieras
  }
}
