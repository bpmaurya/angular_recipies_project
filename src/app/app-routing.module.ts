import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { RecipesResolverService } from './recipies/recipe-resolver.service';
import { RecipesEditComponent } from './recipies/recipes-edit/recipes-edit.component';
import { RecipesStartComponent } from './recipies/recipes-start/recipes-start.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes',pathMatch: 'full'},
  {path:'recipes' ,
  canActivate:[AuthGuard],
  component:RecipiesComponent,
  children:[
    {path:'' , component:RecipesStartComponent},
    {path:'new',component:RecipesEditComponent},
    {path:':id', component:RecipieDetailComponent , resolve: [RecipesResolverService]},
    {path:':id/edit',component:RecipesEditComponent, resolve: [RecipesResolverService]},
  ] },
  {path:'shopping-list' ,component:ShoppingListComponent },
  {path: 'auth',component:AuthComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
