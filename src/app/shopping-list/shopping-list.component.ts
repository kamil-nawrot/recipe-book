import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Ingredient } from "../shared/models/ingredient.model";
import { animate, group, style, transition, trigger } from "@angular/animations";
import { AppState } from "../store/app.reducer";
import { StartEdit } from "./store/shopping-list.action";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger("listItem", [
      transition(":enter", group([
        style({
          opacity: 0,
          transform: "translateX(-100px)"
        }),
        animate(300, style({
          opacity: 1
        })),
        animate(500, style({
          transform: "translateX(0)"
        }))
      ])),
      transition(":leave", group([
        animate(300, style({
          opacity: 0,
          color: "red"
        })),
        animate(500, style({
          transform: "translateX(100px)"
        }))
      ]))
    ])
  ]
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Observable<{ingredients: Ingredient[]}>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.ingredients = this.store.select("shoppingList")
    // this.ingredients = this.shoppingListService.getIngredients()
    // this.shoppingListService.ingredientsChanged.subscribe((updatedIngredients: Ingredient[]) => {
    //   this.ingredients = updatedIngredients
    // })
  }

  onEditItem(i: number) {
    this.store.dispatch(new StartEdit(i))
  }

}
