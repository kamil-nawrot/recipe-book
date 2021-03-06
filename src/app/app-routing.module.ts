import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeBookComponent} from "./recipe-book/recipe-book.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {RecipeBookDetailsComponent} from "./recipe-book/recipe-book-details/recipe-book-details.component";
import {RecipeStartComponent} from "./recipe-book/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-book/recipe-edit/recipe-edit.component";
import {AuthComponent} from "./auth/auth.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  { path: "not-found", component: ErrorPageComponent, data: { errorMessage: "Page was not found" } },
  { path: "auth", component: AuthComponent },
  { path: "**", redirectTo: "/not-found" }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
