import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-book-details',
  templateUrl: './recipe-book-details.component.html',
  styleUrls: ['./recipe-book-details.component.css']
})
export class RecipeBookDetailsComponent implements OnInit {

  recipe: Recipe | undefined

  constructor(private recipeService: RecipeService, private currentRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.currentRoute.params.subscribe((updatedParams: Params) => {
      this.recipe = this.recipeService.getRecipeById(+updatedParams["id"])
    })
  }

  onAddToShoppingList() {
    if (this.recipe) {
      this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
    }
  }

  onEditRecipe() {
    this.router.navigate(["edit"], { relativeTo: this.currentRoute })
  }

}
