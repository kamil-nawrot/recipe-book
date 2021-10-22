import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './playground/server/server.component';
import { WarningAlertComponent } from './playground/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './playground/success-alert/success-alert.component';
import { ServerListComponent } from './playground/server-list/server-list.component';
import { UsernameInputComponent } from './playground/username-input/username-input.component';
import { PasswordToggleComponent } from './playground/password-toggle/password-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerListComponent,
    UsernameInputComponent,
    PasswordToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
