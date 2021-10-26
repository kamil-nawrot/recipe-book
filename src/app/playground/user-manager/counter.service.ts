import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0
  inactiveToActiveCounter = 0

  countChange(initialStatus: string) {
    if (initialStatus === "active") {
      this.activeToInactiveCounter++
    }
    else if (initialStatus === "inactive") {
      this.inactiveToActiveCounter++
    }

    console.log("Active to inactive count: " + this.activeToInactiveCounter)
    console.log("Inactive to active count: " + this.inactiveToActiveCounter)
  }

  constructor() { }
}
