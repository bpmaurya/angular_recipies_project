import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { RecipesResolverService } from "./recipe-resolver.service";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipieDetailComponent } from "./recipie-detail/recipie-detail.component";
import { RecipiesComponent } from "./recipies.component";


const routes:Routes =[

  { path:'' ,
    canActivate:[AuthGuard],
    component:RecipiesComponent,
    children:[
    {path:'' , component: RecipesStartComponent},
    {path:'new',component: RecipesEditComponent },
    {path:':id', component:RecipieDetailComponent , resolve: [RecipesResolverService]},
    {path:':id/edit',component:RecipesEditComponent, resolve: [RecipesResolverService]},
  ] },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RecipeRoutingModule{}
