import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {Server} from "../shared/server.model";

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {

  @Input() element: Server = new Server("server", "", "")

  ngOnChanges() {
    console.log("ngOnChanges() fired")
  }

  constructor() {
    console.log("constructor called")
  }

  ngOnInit() {
    console.log("ngOnInit() fired")
  }

  ngDoCheck() {
    console.log("ngDoCheck() fired")
  }

}
