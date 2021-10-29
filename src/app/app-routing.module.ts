import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./playground/server-management/home/home.component";
import {UsersComponent} from "./playground/server-management/users/users.component";
import {UserComponent} from "./playground/server-management/users/user/user.component";
import {ServersComponent} from "./playground/server-management/servers/servers.component";
import {ServerComponent} from "./playground/server-management/servers/server/server.component";
import {EditServerComponent} from "./playground/server-management/servers/edit-server/edit-server.component";
import {AuthGuardService} from "./auth-guard.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "users", component: UsersComponent, children: [
      { path: ":id", component: UserComponent },
    ]
  },
  { path: "servers", component: ServersComponent, canActivateChild: [AuthGuardService], children: [
      { path: ":id", component: ServerComponent },
      { path: ":id/edit", component: EditServerComponent }
    ]
  },
  { path: "**", redirectTo: ""},
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
