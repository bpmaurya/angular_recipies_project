import { Action } from "@ngrx/store";
import { Ingredient } from "../shared/ingredients.model";

const initialState={
  ingredients: [
    new Ingredient('apples',5),
    new Ingredient('mango',34),
    new Ingredient('banana',34)
  ]
}

export function shoppingListReduces(state=initialState,action:Action){
  switch(action.type){
    case 'ADD_INGREDIENT':
      return {
        ...state,
        ingredients:[...state.ingredients,action]
      }
  }

}
