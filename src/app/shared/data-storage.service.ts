import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipies/recipe.model";
import { RecipeService } from "../recipies/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{

    constructor(private http:HttpClient,private recipeService:RecipeService){

    }

    storeRecipes(){
        const recipes = this.recipeService.getRecipes()
        this.http
        .put('https://resturent-1add7-default-rtdb.firebaseio.com/recipes.json',recipes)
        .subscribe(response =>{
          console.log(response);
        })
    }

    fetchRecipes(){

    }

}
