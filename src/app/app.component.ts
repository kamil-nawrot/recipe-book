import { Component } from '@angular/core';
import {Server} from "./playground/shared/server.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  currentPage = 'recipes'
  onPageChange(page: string) {
    this.currentPage = page
  }

  serverElements = [
    { type: 'server', name: 'Test Server', description: 'Server for testing purposes.' }
  ]

  onServerAdded(serverData: Server) {
    this.serverElements.push(serverData)
  }

  onBlueprintAdded(blueprintData: Server) {
    this.serverElements.push(blueprintData)
  }

}
