import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number | undefined
  editMode = false

  recipeForm: FormGroup

  constructor(private currentRoute: ActivatedRoute, private recipeService: RecipeService, private router: Router) {
    this.recipeForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.currentRoute.params.subscribe((updatedParams: Params) => {
      this.id = +updatedParams["id"]
      this.editMode = updatedParams["id"] != null
      this.initForm()
    })
  }

  get controls() {
    return (<FormArray>this.recipeForm.get("ingredients")).controls
  }

  private initForm() {
    let recipe: Recipe | null = this.editMode ? this.recipeService.getRecipeById(this.id) : null

    this.recipeForm.addControl("ingredients", new FormArray([]))

    if(recipe && recipe.ingredients.length > 0) {
      for (let ingredient of recipe.ingredients) {
        (<FormArray>this.recipeForm.get("ingredients")).push(new FormGroup({
          "name": new FormControl(ingredient.name, Validators.required),
          "amount": new FormControl(ingredient.amount, [Validators.required, Validators.min(1)]),
          "unit": new FormControl(ingredient.unit)
        }))
      }
    }

    this.recipeForm.addControl("name", new FormControl(recipe ? recipe.name : null, Validators.required))
    this.recipeForm.addControl("imagePath", new FormControl(recipe ? recipe.imagePath : null, Validators.required))
    this.recipeForm.addControl("description", new FormControl(recipe ? recipe.description : null, Validators.required))
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(new FormGroup({
      "name": new FormControl(null, Validators.required),
      "amount": new FormControl(null, [Validators.required, Validators.min(1)]),
      "unit": new FormControl()
    }))
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index)
  }

  onSubmit() {
    const newRecipe = new Recipe(
        this.id || this.recipeService.getRecipes().length + 1,
        this.recipeForm.get("name").value,
        this.recipeForm.get("description").value,
        this.recipeForm.get("imagePath").value,
        this.recipeForm.get("ingredients").value
    )
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe)
      this.router.navigate(["../"], { relativeTo: this.currentRoute })
    }
    else {
      this.recipeService.addRecipe(newRecipe)
      this.recipeForm.reset()
      this.router.navigate(["../", newRecipe.id], { relativeTo: this.currentRoute })
    }
  }

  onCancel() {
    this.router.navigate(["../"], { relativeTo: this.currentRoute })
  }

}
