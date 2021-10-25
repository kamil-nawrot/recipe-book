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
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListItemComponent } from './shopping-list/shopping-list-item/shopping-list-item.component';
import { ShoppingListInputComponent } from './shopping-list/shopping-list-input/shopping-list-input.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeBookListComponent } from './recipe-book/recipe-book-list/recipe-book-list.component';
import { RecipeBookDetailsComponent } from './recipe-book/recipe-book-details/recipe-book-details.component';
import { RecipeBookItemComponent } from './recipe-book/recipe-book-item/recipe-book-item.component';
import { ServerCockpitComponent } from './playground/server-cockpit/server-cockpit.component';
import { ServerElementComponent } from './playground/server-element/server-element.component';
import { GameControlComponent } from './playground/number-game/game-control/game-control.component';
import { OddNumberComponent } from './playground/number-game/odd-number/odd-number.component';
import { EvenNumberComponent } from './playground/number-game/even-number/even-number.component';
import { NumberGameComponent } from './playground/number-game/number-game.component';
import {BasicHighlightDirective} from "./playground/basic-highlight/basic-highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerListComponent,
    UsernameInputComponent,
    PasswordToggleComponent,
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListInputComponent,
    HeaderComponent,
    RecipeBookComponent,
    RecipeBookListComponent,
    RecipeBookDetailsComponent,
    RecipeBookItemComponent,
    ServerCockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    OddNumberComponent,
    EvenNumberComponent,
    NumberGameComponent,
    BasicHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
