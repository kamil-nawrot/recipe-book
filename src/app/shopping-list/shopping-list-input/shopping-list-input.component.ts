import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";
import {LoggingService} from "../../shared/logging.service";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

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

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) { }

  ngOnInit(): void {
    this.startedEditingSub = this.shoppingListService.startedEditing.subscribe(index => {
      this.editMode = true
      this.editedItemIndex = index
      this.editedItem = this.shoppingListService.getIngredientById(this.editedItemIndex)
      this.addIngredientForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
        unit: this.editedItem.unit
      })
    })
  }

  resetForm(): void {
    this.editMode = false
    this.addIngredientForm.reset()
  }

  onAddIngredient() {
    console.log(this.addIngredientForm.value)
    const formData = this.addIngredientForm.value
    const newIngredient = new Ingredient(formData.name, formData.amount, formData.unit)
    if (!this.editMode) this.shoppingListService.addIngredient(newIngredient)
    else this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient)

    this.resetForm()
  }

  onDeleteIngredient() {
    if (this.editMode) {
      this.shoppingListService.deleteIngredient(this.editedItemIndex)
      this.resetForm()
    }
  }

  ngOnDestroy() {
    this.startedEditingSub.unsubscribe()
  }

}
