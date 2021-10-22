import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  getColor(): string {
    return this._serverStatus === "online" ? "green" : "red"
  }

  get serverStatus(): string {
    return this._serverStatus
  }

  set serverStatus(status) {
    this._serverStatus = status
  }

  public serverId = Math.floor(Math.random() * 1000)
  private _serverStatus = ''

  constructor() {
    this._serverStatus = Math.random() > 0.5 ? "online" : "offline"
  }

  ngOnInit(): void {
  }

}
