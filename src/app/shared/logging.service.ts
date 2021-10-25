import { Injectable } from '@angular/core';
import {Ingredient} from "./models/ingredient.model";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  logNewIngredient(ingredient: Ingredient) {
    console.log(`Ingredient: ${ingredient.name} (${ingredient.amount} ${ingredient.unit}) was added to the list`)
  }

}
