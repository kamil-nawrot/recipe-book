import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Server} from "../shared/server.model";

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {

  @ViewChild("serverDescriptionInput", { static: true }) serverDescriptionInput: ElementRef | undefined

  @Output() addServer = new EventEmitter<Server>()
  @Output() addBlueprint = new EventEmitter<Server>()

  onAddServer(serverNameInput: HTMLInputElement) {
    this.addServer.emit(new Server("server", serverNameInput.value, this.serverDescriptionInput?.nativeElement.value))
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.addBlueprint.emit(new Server("server-blueprint", serverNameInput.value, this.serverDescriptionInput?.nativeElement.value))
  }

  constructor() { }

  ngOnInit(): void {
  }

}
