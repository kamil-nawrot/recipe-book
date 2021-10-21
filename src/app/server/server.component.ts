import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  get serverStatus(): string {
    return this._serverStatus
  }

  public serverId = 10
  private _serverStatus = 'offline'

  constructor() {
  }


  ngOnInit(): void {
  }

}
