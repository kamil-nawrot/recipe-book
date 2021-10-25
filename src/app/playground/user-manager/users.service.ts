import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers: string[] = ["John", "Jane", "Vincent", "Max"]
  inactiveUsers: string[] = ["Paul", "Christina", "Robert"]

  constructor() { }
}
