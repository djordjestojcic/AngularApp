import { Component, OnInit, Output,EventEmitter,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Recipe} from '../recipes.model';
import { RecipesServices } from '../recipes.services';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[];
  
  constructor(
    private recipesServices:RecipesServices,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit(){
    this.recipes=this.recipesServices.getRecipes();
  }
  // onRecipeSelected(recipe:Recipe){
     //this.recipeWasSelected.emit(recipe)
  // }
  newRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route});
  }
  
}
