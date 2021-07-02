import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipesResolverService } from "./recipe-resolver.service";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipieDetailComponent } from "./recipie-detail/recipie-detail.component";
import { RecipiesComponent } from "./recipies.component";


const routes:Routes =[

  {path:'recipes' ,
  canActivate:[AuthGuard],
  component:RecipiesComponent,
  children:[
    {path:'' , component:RecipesStartComponent},
    {path:'new',component:RecipesStartComponent},
    {path:':id', component:RecipieDetailComponent , resolve: [RecipesResolverService]},
    {path:':id/edit',component:RecipesStartComponent, resolve: [RecipesResolverService]},
  ] },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule{}
