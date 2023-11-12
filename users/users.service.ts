import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { UserI } from '../products/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // url: string = "https://fakestoreapi.com/users";
  url: string = "http://localhost:3000/users";

  // urlLogin: string = "https://fakestoreapi.com/users";
  urlLogin: string = "http://localhost:3000/users";

  userActive: boolean = false;

  constructor(private httpClient: HttpClient) { }

  addUser(e: UserI): Observable<UserI>{
    return this.httpClient.post<UserI>(this.url, e);
  }

  getAllUsers(): Observable<UserI[]>{
    return this.httpClient.get<UserI[]>(this.url);
  }

  login(username: string, password: string): Observable<{ id: any, token: string }> {
    const body = { username, password };
    return this.httpClient.post<{ id: any, token: string }>(`${this.url}`, body);
  }

  getUserById(id:number): Observable<UserI>{
    return this.httpClient.get<UserI>(this.url + `/${id}`)
  }

  updateUser(e: UserI): Observable<UserI>{
    return this.httpClient.put<UserI>(this.url + `/${e.id}`, e)
  }

  deleteUser(id:number): Observable<UserI>{
    return this.httpClient.delete<UserI>(this.url + `/${id}`)
  }

}