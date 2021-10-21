import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-input',
  templateUrl: './username-input.component.html',
  styleUrls: ['./username-input.component.css']
})
export class UsernameInputComponent implements OnInit {

  username = ""

  onReset() {
    this.username = ""
  }

  constructor() { }

  ngOnInit(): void {
  }

}
