import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-game',
  templateUrl: './number-game.component.html',
  styleUrls: ['./number-game.component.css']
})
export class NumberGameComponent {

  evenNumbers: number[] = []
  oddNumbers: number[] = []

  onValueChange(value: number) {
    console.log("Current value: " + value)
    value % 2 === 0 ? this.evenNumbers.push(value) : this.oddNumbers.push(value)
  }

}
