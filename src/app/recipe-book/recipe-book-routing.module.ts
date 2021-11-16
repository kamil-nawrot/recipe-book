import { NgModule } from "@angular/core";

import {RouterModule, Routes} from "@angular/router";
import {RecipeBookComponent} from "./recipe-book.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeBookDetailsComponent} from "./recipe-book-details/recipe-book-details.component";
import {RecipesResolver} from "./recipes.resolver";
import {AuthGuard} from "../auth/auth.guard";

const routes: Routes = [
    { path: "recipes", component: RecipeBookComponent, canActivate: [AuthGuard], children: [
            { path: "", component: RecipeStartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id", component: RecipeBookDetailsComponent, resolve: [RecipesResolver] },
            { path: ":id/edit", component: RecipeEditComponent, resolve: [RecipesResolver] },
        ]
    },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RecipeBookRoutingModule { }
