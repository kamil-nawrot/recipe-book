import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./playground/server-management/home/home.component";
import {UsersComponent} from "./playground/server-management/users/users.component";
import {UserComponent} from "./playground/server-management/users/user/user.component";
import {ServersComponent} from "./playground/server-management/servers/servers.component";
import {ServerComponent} from "./playground/server-management/servers/server/server.component";
import {EditServerComponent} from "./playground/server-management/servers/edit-server/edit-server.component";
import {AuthGuardService} from "./auth-guard.service";
import {CanDeactivateGuardService} from "./playground/server-management/servers/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolverService} from "./playground/server-management/servers/server/server-resolver.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsersComponent, children: [
      { path: ":id", component: UserComponent },
    ]
  },
  { path: "servers", component: ServersComponent, canActivateChild: [AuthGuardService], children: [
      { path: ":id", component: ServerComponent, resolve: { server: ServerResolverService } },
      { path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGuardService] }
    ]
  },
  { path: "not-found", component: ErrorPageComponent, data: { errorMessage: "Page was not found!" } },
  { path: "**", redirectTo: "not-found"},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
