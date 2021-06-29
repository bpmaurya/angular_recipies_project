import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

   recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe('A Test Recipe','this is best recipe','https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries',20)
    ]),
    new Recipe('A Another Recipe','this is best recipe','https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat',23)
    ])
  ]

  constructor(private slService:ShoppingListService){

  }

  getRecipes(){
  return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients:Ingredient[]){
   this.slService.addIngredients(ingredients);
  }
}
