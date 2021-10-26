import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  inactiveUsers: string[] = []

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.inactiveUsers = this.usersService.inactiveUsers
  }

  onChangeStatus(id: number) {
    this.usersService.onChangeUserStatus(id, "active")
  }

}
