import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/models/ingredient.model";
import {LoggingService} from "../../shared/logging.service";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-list-input',
  templateUrl: './shopping-list-input.component.html',
  styleUrls: ['./shopping-list-input.component.css']
})
export class ShoppingListInputComponent implements OnInit {

  @ViewChild("addIngredientForm") addIngredientForm: NgForm

  constructor(private shoppingListService: ShoppingListService, private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    console.log(this.addIngredientForm.value)
    const formData = this.addIngredientForm.value
    const newIngredient = new Ingredient(formData.name, formData.amount, formData.unit)
    this.shoppingListService.addIngredient(newIngredient)
  }

}
