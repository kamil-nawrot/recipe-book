import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  public isNewServerAllowed = false
  public serverCreationStatus = "No servers are being created"
  public serverName = ''

  toggleIsNewServerAllowed() {
    this.isNewServerAllowed = !this.isNewServerAllowed
  }

  constructor() {
    setInterval(() => {
      this.toggleIsNewServerAllowed()
    }, 2000)
  }

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created!'
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  ngOnInit(): void {
  }

}
