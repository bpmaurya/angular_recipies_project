import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit {

  recipe!:Recipe;
  id!:number;


  constructor(private recipeService: RecipeService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params:Params) => {
       this.id = +params['id'];
       this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)

  }

}
