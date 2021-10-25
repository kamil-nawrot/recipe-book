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

  evenNumbers = [2, 4, 6, 8]
  oddNumbers = [1, 3, 5, 7, 9]

  onValueChange(value: number) {
    console.log("Current value: " + value)
  }

}
