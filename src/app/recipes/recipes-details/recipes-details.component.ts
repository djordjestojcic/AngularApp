import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import {Recipe} from "../recipes.model";
import {RecipesServices} from '../recipes.services';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})

export class RecipesDetailsComponent implements OnInit {
  recipe:Recipe;
  id:number;

  constructor(
    private recipesServices:RecipesServices,
    private route:ActivatedRoute,
    private router:Router ) { }

  ngOnInit(): void {
    const id = this.route.params
      .subscribe(
        (params:Params)=>{
          this.id=+params['id'];
          this.recipe=this.recipesServices.getRecipeById(this.id);
        }
      );
  }
  onAddToShoppingList(){
    this.recipesServices.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo:this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo:this.route});
  }

  onDeleteRecipe(){
    this.recipesServices.deleteRecipes(this.id);
    this.router.navigate(['/recipes']);
  }

}
