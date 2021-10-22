import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent implements OnInit {

  public serverList = ["DEV Server", "TEST1 Server"]

  public isNewServerAllowed = false
  public serverCreationStatus = false
  public serverName = 'Server name...'

  toggleIsNewServerAllowed() {
    this.isNewServerAllowed = !this.isNewServerAllowed
  }

  constructor() {
    setInterval(() => {
      this.toggleIsNewServerAllowed()
    }, 2000)
  }

  onCreateServer(): void {
    this.serverCreationStatus = true
    this.serverList.push(this.serverName)
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  ngOnInit(): void {
  }

}
