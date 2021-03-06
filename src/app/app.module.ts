import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";

import { AppComponent } from './app.component';
import { AuthEffects } from "./auth/store/auth.effects";
import { WarningAlertComponent } from './playground/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './playground/success-alert/success-alert.component';
import { ServerListComponent } from './playground/server-list/server-list.component';
import { UsernameInputComponent } from './playground/username-input/username-input.component';
import { PasswordToggleComponent } from './playground/password-toggle/password-toggle.component';
import { HeaderComponent } from './header/header.component';
import { ServerCockpitComponent } from './playground/server-cockpit/server-cockpit.component';
import { ServerElementComponent } from './playground/server-element/server-element.component';
import { GameControlComponent } from './playground/number-game/game-control/game-control.component';
import { OddNumberComponent } from './playground/number-game/odd-number/odd-number.component';
import { EvenNumberComponent } from './playground/number-game/even-number/even-number.component';
import { NumberGameComponent } from './playground/number-game/number-game.component';
import { BasicHighlightDirective } from "./playground/basic-highlight/basic-highlight.directive";
import { BetterHighlightDirective } from './playground/basic-highlight/better-highlight.directive';
import { UnlessDirective } from './playground/unless/unless.directive';
import { AccountManagerComponent } from './playground/account-manager/account-manager.component';
import { AddAccountComponent } from './playground/account-manager/add-account/add-account.component';
import { AccountComponent } from './playground/account-manager/account/account.component';
import { UserManagerComponent } from './playground/user-manager/user-manager.component';
import { ActiveUsersComponent } from './playground/user-manager/active-users/active-users.component';
import { InactiveUsersComponent } from './playground/user-manager/inactive-users/inactive-users.component';
import { UsersService } from "./playground/user-manager/users.service";
import { CounterService } from "./playground/user-manager/counter.service";
import { RecipeBookEffects } from "./recipe-book/store/recipe-book.effects";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { ServerManagementComponent } from './playground/server-management/server-management.component';
import { HomeComponent } from "./playground/server-management/home/home.component";
import { ServersComponent } from "./playground/server-management/servers/servers.component";
import { ServerComponent } from "./playground/server-management/servers/server/server.component"
import { UsersComponent } from "./playground/server-management/users/users.component";
import { UserComponent } from "./playground/server-management/users/user/user.component";
import { EditServerComponent } from "./playground/server-management/servers/edit-server/edit-server.component";
import { ServersService } from "./playground/server-management/servers/servers.service";
import { AppRoutingModule } from "./app-routing.module";
import { AuthService } from "./auth.service";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeactivateGuardService } from "./playground/server-management/servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolverService } from "./playground/server-management/servers/server/server-resolver.service";
import { TemplateDrivenFormComponent } from './playground/forms/template-driven-form/template-driven-form.component';
import { TemplateDrivenFormAssignmentComponent } from './playground/forms/template-driven-form-assignment/template-driven-form-assignment.component';
import { ReactiveFormComponent } from './playground/forms/reactive-form/reactive-form.component';
import { ReactiveFormAssignmentComponent } from './playground/forms/reactive-form-assignment/reactive-form-assignment.component';
import { PipesComponent } from './playground/pipes/pipes.component';
import { ShortenPipe } from './playground/pipes/shorten.pipe';
import { FilterPipe } from './playground/pipes/filter.pipe';
import { ReversePipe } from './playground/pipes/reverse.pipe';
import { SortPipe } from './playground/pipes/sort.pipe';
import { SendRequestComponent } from './playground/http/send-request/send-request.component';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { RecipeBookModule } from "./recipe-book/recipe-book.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";
import { SharedModule } from "./shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptor } from "./auth/auth.interceptor";
import { appReducer } from "./store/app.reducer";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerListComponent,
    UsernameInputComponent,
    PasswordToggleComponent,
    HeaderComponent,
    ServerCockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddNumberComponent,
    EvenNumberComponent,
    NumberGameComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountManagerComponent,
    AddAccountComponent,
    AccountComponent,
    UserManagerComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ServerManagementComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    ErrorPageComponent,
    TemplateDrivenFormComponent,
    TemplateDrivenFormAssignmentComponent,
    ReactiveFormComponent,
    ReactiveFormAssignmentComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    SortPipe,
    SendRequestComponent,
    AuthComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RecipeBookModule,
    ShoppingListModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([AuthEffects, RecipeBookEffects]),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    })
  ],
  providers: [UsersService, CounterService, ShoppingListService, ServersService, AuthService, AuthGuardService, CanDeactivateGuardService, ServerResolverService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
