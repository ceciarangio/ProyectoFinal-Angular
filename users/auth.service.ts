import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private userId: any;

  private jsonUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<{ success: boolean, id?: any, token?: string }> {
    return this.http.get<any[]>(this.jsonUrl).pipe(
      map(users => {
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
          this.isAuthenticated = true;
          this.userId = user.id;
          return { success: true, id: user.id, token: 'simulated-token' };
        } else {
          return { success: false };
        }
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    this.userId = null;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUserId(): any {
    return this.userId;
  }
}