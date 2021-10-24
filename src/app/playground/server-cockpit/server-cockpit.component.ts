import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from "../shared/server.model";

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {

  newServerName = "test"
  newServerDescription = ""

  @Output() addServer = new EventEmitter<Server>()
  @Output() addBlueprint = new EventEmitter<Server>()

  onAddServer() {
    console.log(this.newServerName)
    console.log(this.newServerDescription)
    this.addServer.emit(new Server("server", this.newServerName, this.newServerDescription))
  }

  onAddBlueprint() {
    this.addBlueprint.emit(new Server("server-blueprint", this.newServerName, this.newServerDescription))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
