import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent implements OnInit {

  recipes!:Recipe[];


  constructor(private recipeService: RecipeService,private router:Router ,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();

  }
  onNewRecipe(){

    this.router.navigate(['new'],{relativeTo: this.route});

  }



}



