import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Data, Params, Router} from "@angular/router";
import {Server} from "./server.interface";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: Server | undefined = { id: -1, name: "", status: "" }

  constructor(private serversService: ServersService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // if (this.serversService.getServer(+this.currentRoute.snapshot.params["id"])) {
    //   this.server = this.serversService.getServer(+this.currentRoute.snapshot.params["id"]);
    // }
    //
    // this.currentRoute.params.subscribe((updatedParams: Params) => {
    //   this.server = this.serversService.getServer(+updatedParams["id"])
    // })
    this.currentRoute.data.subscribe((data: Data) => {
      this.server = data.server
    })
  }

  onEdit() {
    this.router.navigate(["edit"], { relativeTo: this.currentRoute, queryParams: { allowEdit: this.server && this.server.id === 2 ? "true" : "false" }, queryParamsHandling: "merge" })
  }

}
