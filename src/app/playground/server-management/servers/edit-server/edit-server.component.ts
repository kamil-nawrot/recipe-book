import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server: {id: number, name: string, status: string} = { id: -1, name: "", status: "" };
  serverName = '';
  serverStatus = '';

  queryParams: Params | undefined
  fragment: string | undefined

  queryParamsSubscription: Subscription
  fragmentSubscription: Subscription

  constructor(private serversService: ServersService, private currentRoute: ActivatedRoute) {
    this.queryParamsSubscription = this.currentRoute.queryParams.subscribe(updatedQueryParams => {
      this.queryParams = updatedQueryParams
    })
    this.fragmentSubscription = this.currentRoute.fragment.subscribe(updatedFragment => {
      this.fragment = updatedFragment || ""
    })
  }

  ngOnInit() {
    if (this.server) {
      // @ts-ignore
      this.server = this.serversService.getServer(+this.currentRoute.snapshot.params["id"])
      console.log("Test" + this.server)
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }


  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
