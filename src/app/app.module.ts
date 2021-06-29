import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { HeaderDirective } from './header/header.directive';
import { RecipiesComponent } from './recipies/recipies.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeService } from './recipies/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipesStartComponent } from './recipies/recipes-start/recipes-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderDirective,
    RecipiesComponent,
    RecipieDetailComponent,
    RecipieListComponent,
    RecipieItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipesStartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
