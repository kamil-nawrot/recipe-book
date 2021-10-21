import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  toggleIsNewServerAllowed() {
    this.isNewServerAllowed = !this.isNewServerAllowed
  }

  public isNewServerAllowed = false

  constructor() {
    setInterval(() => {
      this.toggleIsNewServerAllowed()
    }, 1000)
  }

  ngOnInit(): void {
  }

}
