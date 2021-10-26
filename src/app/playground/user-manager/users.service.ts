import {EventEmitter, Injectable} from '@angular/core';
import {CounterService} from "./counter.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers: string[] = ["John", "Jane", "Vincent", "Max"]
  inactiveUsers: string[] = ["Paul", "Christina", "Robert"]

  public changeUserStatus = new EventEmitter<{ id: number, status: string }>()

  constructor(private counterService: CounterService) { }

  onChangeUserStatus(id: number, status: string) {
    if (status === "active") {
      const user = this.inactiveUsers.splice(id, 1)
      this.activeUsers.push(user[0])
      this.counterService.countChange("inactive")
    }
    else if (status === "inactive") {
      const user = this.activeUsers.splice(id, 1)
      this.inactiveUsers.push(user[0])
      this.counterService.countChange("active")
    }
  }

}
