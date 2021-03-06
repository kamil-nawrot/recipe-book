import { NgModule } from "@angular/core";
import { RecipeBookComponent } from "./recipe-book.component";
import { RecipeBookListComponent } from "./recipe-book-list/recipe-book-list.component";
import { RecipeBookDetailsComponent } from "./recipe-book-details/recipe-book-details.component";
import { RecipeBookItemComponent } from "./recipe-book-item/recipe-book-item.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RecipeBookRoutingModule } from "./recipe-book-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeBookListComponent,
        RecipeBookDetailsComponent,
        RecipeBookItemComponent,
        RecipeStartComponent,
        RecipeEditComponent,
    ],
    imports: [
        RecipeBookRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class RecipeBookModule { }