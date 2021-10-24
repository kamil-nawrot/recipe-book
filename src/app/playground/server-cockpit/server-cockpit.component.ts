import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-cockpit',
  templateUrl: './server-cockpit.component.html',
  styleUrls: ['./server-cockpit.component.css']
})
export class ServerCockpitComponent implements OnInit {

  newServerName = ""
  newServerDescription = ""

  constructor() { }

  ngOnInit(): void {
  }

}
