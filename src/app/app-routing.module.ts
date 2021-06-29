import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesStartComponent } from './recipies/recipes-start/recipes-start.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes',pathMatch: 'full'},
  {path:'recipes' ,component:RecipiesComponent,children:[
    {path:'' , component:RecipesStartComponent},
    {path:':id', component:RecipieDetailComponent}
  ] },
  {path:'shopping-list' ,component:ShoppingListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
