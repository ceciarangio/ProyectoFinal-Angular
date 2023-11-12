import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from '../products/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: string = 'https://fakestoreapi.com/users';
  // url: string = 'http://localhost:3000/users';

  urlLogin: string = 'https://fakestoreapi.com/auth';

  private authenticatedUserId: string = '';

  constructor(private httpClient: HttpClient) {}


  getAllUsers(): Observable<UserI[]>{
    return this.httpClient.get<UserI[]>(this.url);
  }

  addUser(newUser: UserI): Observable<UserI> {
    return this.httpClient.post<UserI>(this.url, newUser);
  }

  getUserById(id: number): Observable<UserI> {
    return this.httpClient.get<UserI>(`${this.url}/${id}`)
  };

  updateUser(e: UserI): Observable<UserI>{
    return this.httpClient.put<UserI>(`${this.url}/${e.id}`, e)
  };

  deleteUserById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }

  login(username: string, password: string): Observable<{ id: any, token: string }> {
    const body = { username, password };
    return this.httpClient.post<{ id: any, token: string }>(`${this.url}`, body);
  }
}
