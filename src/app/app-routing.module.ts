import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "shopping-list", component: ShoppingListComponent },
  { path: "recipes", component: RecipeBookComponent },
  { path: "not-found", component: ErrorPageComponent, data: { errorMessage: "Page was not found" } },
  { path: "**", redirectTo: "/not-found" }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
