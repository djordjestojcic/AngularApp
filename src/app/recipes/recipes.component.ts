import { Component, Input, OnInit } from '@angular/core';
import {Recipe} from './recipes.model';
import { RecipesServices } from './recipes.services';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private recipesService:RecipesServices) { }

  ngOnInit(): void { //subscribe -> listener, informs about changes
    this.recipesService.recipeSelected.subscribe(
      (recipe:Recipe)=>{
        this.selectedRecipe = recipe;
      }
    )
  }

}
