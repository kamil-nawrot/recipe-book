import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  isGameStarted = false

  intervalId = 0
  counterValue = 0
  @Output() valueChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.isGameStarted = true
    this.intervalId = setInterval(() => {
      this.counterValue++
      this.valueChange.emit(this.counterValue)
    }, 100)
  }

  onPauseGame() {
    this.isGameStarted = false
    clearInterval(this.intervalId)
  }

}
