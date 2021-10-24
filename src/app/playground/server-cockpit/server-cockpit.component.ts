import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from "../shared/server.model";

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {

  newServerDescription = ""

  @Output() addServer = new EventEmitter<Server>()
  @Output() addBlueprint = new EventEmitter<Server>()

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.newServerDescription)
    this.addServer.emit(new Server("server", serverNameInput.value, this.newServerDescription))
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.addBlueprint.emit(new Server("server-blueprint", serverNameInput.value, this.newServerDescription))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
