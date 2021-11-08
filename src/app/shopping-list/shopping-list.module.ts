import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShoppingListComponent} from "./shopping-list.component";
import {ShoppingListItemComponent} from "./shopping-list-item/shopping-list-item.component";
import {ShoppingListInputComponent} from "./shopping-list-input/shopping-list-input.component";
import {FormsModule} from "@angular/forms";
import {ShoppingListRoutingModule} from "./shopping-list-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingListItemComponent,
    ShoppingListInputComponent,
  ],
  imports: [
    FormsModule,
    ShoppingListRoutingModule,
    SharedModule
  ]
})
export class ShoppingListModule { }
