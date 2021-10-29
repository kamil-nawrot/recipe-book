import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import { Server } from "./server.interface";
import { ServersService } from "../servers.service";



@Injectable({
  providedIn: 'root'
})
export class ServerResolverService implements Resolve<Server> {

  resolve(currentRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    // @ts-ignore
    return this.serversService.getServer(+currentRoute.params["id"])
  }

  constructor(private serversService: ServersService) { }
}
