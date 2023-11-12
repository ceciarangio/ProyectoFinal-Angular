import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { UserI } from '../../products/models/user';

@Component({
  selector: 'app-users-list',
  templateUrl: '../user-list/user-list.component.html',
  styleUrls: ['../user-list/user-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users: UserI[] = [];

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }
}