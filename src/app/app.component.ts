import { Component } from '@angular/core';
import {Server} from "./playground/shared/server.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // serverElements = [
  //   { type: 'server', name: 'Test Server', description: 'Server for testing purposes.' }
  // ]
  //
  // onServerAdded(serverData: Server) {
  //   this.serverElements.push(serverData)
  // }
  //
  // onBlueprintAdded(blueprintData: Server) {
  //   this.serverElements.push(blueprintData)
  // }

  evenNumbers: number[] = []
  oddNumbers: number[] = []

  onValueChange(value: number) {
    console.log("Current value: " + value)
    value % 2 === 0 ? this.evenNumbers.push(value) : this.oddNumbers.push(value)
  }

}
