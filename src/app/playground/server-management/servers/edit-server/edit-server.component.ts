import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {CanComponentDeactivate} from "./can-deactivate-guard.service";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: {id: number, name: string, status: string} = { id: -1, name: "", status: "" };
  serverName = '';
  serverStatus = '';
  changeSaved = false

  queryParams: Params | undefined
  fragment: string | undefined

  queryParamsSubscription: Subscription
  fragmentSubscription: Subscription

  constructor(private serversService: ServersService, private currentRoute: ActivatedRoute, private router: Router) {
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
    this.changeSaved = true
    this.router.navigate(["../"], { relativeTo: this.currentRoute })
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if ((this.server.name !== this.serverName || this.server.status !== this.serverStatus) && !this.changeSaved) {
      console.log('test')
      return confirm("Are you sure you want to leave that page? You have unsaved changes.")
    }
    else return true
  }

}
