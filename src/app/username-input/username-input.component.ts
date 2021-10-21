import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css']
})
export class UsernameInputComponent implements OnInit {

  username = ""
  isUsernameEmpty = true

  onUsernameChange(event: Event) {
    let value = (<HTMLInputElement>event.target).value
    value.length === 0 ? this.isUsernameEmpty = true : this.isUsernameEmpty = false
  }

  onReset() {
    this.username = ""
    this.isUsernameEmpty = true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
