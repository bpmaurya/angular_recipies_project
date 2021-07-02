import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { RecipesEditComponent } from "./recipes-edit/recipes-edit.component";
import { RecipeRoutingModule } from "./recipes-routing.module";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipieDetailComponent } from "./recipie-detail/recipie-detail.component";
import { RecipieItemComponent } from "./recipie-list/recipie-item/recipie-item.component";
import { RecipieListComponent } from "./recipie-list/recipie-list.component";
import { RecipiesComponent } from "./recipies.component";

@NgModule({
  declarations: [
    RecipiesComponent,
    RecipieDetailComponent,
    RecipieListComponent,
    RecipieItemComponent,
    RecipesStartComponent,
    RecipesEditComponent,
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
    SharedModule,
  ]
})
export class RecipeModule{}
