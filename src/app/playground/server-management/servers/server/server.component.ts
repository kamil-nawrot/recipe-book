import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string} | undefined;

  constructor(private serversService: ServersService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.currentRoute.snapshot.params["id"]);
    this.currentRoute.params.subscribe((updatedParams: Params) => {
      this.server = this.serversService.getServer(+updatedParams["id"])
    })
  }

  onEdit() {
    this.router.navigate(["edit"], { relativeTo: this.currentRoute, queryParamsHandling: "preserve" })
  }

}
