import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../store/app.reducer";
import { Ingredient } from "../../shared/models/ingredient.model";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AddIngredient, DeleteIngredient, StopEdit, UpdateIngredient } from "../store/shopping-list.action";

@Component({
  selector: 'app-shopping-list-input',
  templateUrl: './shopping-list-input.component.html',
  styleUrls: ['./shopping-list-input.component.css']
})
export class ShoppingListInputComponent implements OnInit, OnDestroy {

  @ViewChild("addIngredientForm") addIngredientForm: NgForm

  startedEditingSub: Subscription
  editMode = false
  editedItemIndex = -1
  editedItem: Ingredient

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select("shoppingList").subscribe(shoppingListState => {
      if(shoppingListState.editedIngredientIndex > -1) {
        this.editMode = true
        this.editedItemIndex = shoppingListState.editedIngredientIndex
        this.editedItem = shoppingListState.editedIngredient
        this.addIngredientForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
          unit: this.editedItem.unit
        })
      }
      else {
        this.editMode = false
      }
    })

    // this.editedItem = this.shoppingListService.getIngredientById(this.editedItemIndex)
  }

  resetForm(): void {
    this.editMode = false
    this.store.dispatch(new StopEdit())
    this.addIngredientForm.reset()
  }

  onAddIngredient() {
    console.log(this.addIngredientForm.value)
    const formData = this.addIngredientForm.value
    const newIngredient = new Ingredient(formData.name, formData.amount, formData.unit)
    if (!this.editMode)
      this.store.dispatch(new AddIngredient(newIngredient))
      //  this.shoppingListService.addIngredient(newIngredient)
    else {
      this.store.dispatch(new UpdateIngredient(newIngredient))
    }
      // this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)

    this.resetForm()
  }

  onDeleteIngredient() {
    if (this.editMode) {
      this.store.dispatch(new DeleteIngredient())
      // this.shoppingListService.deleteIngredient(this.editedItemIndex)
      this.resetForm()
    }
  }

  ngOnDestroy() {
    // this.startedEditingSub.unsubscribe()
    this.store.dispatch(new StopEdit())
  }

}
