import { EventEmitter, Injectable } from '@angular/core';
import{Recipe} from './recipes.model';
import{Ingredient} from '../shared/ingredients.model';
import { ShoppingListServices } from '../shopping-list/shopping-list.services';
import { Subject } from 'rxjs';
@Injectable()
export class RecipesServices{
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[]=[
        new Recipe('Karbonara',
        'Pasta sa belim lukom, jajima i slaninom',
        'https://www.jocooks.com/wp-content/uploads/2012/05/creamy-carbonara-1.jpg',
        [
            new Ingredient('Pasta',1),
            new Ingredient('Beli luk',1),
            new Ingredient ('Slanina',200)

        ]),
        new Recipe('Bolonjeze',
        'Pasta sa sosom od paradajza i mlevenim mesom',
        'https://www.recepti.com/images/stories/kuvar/glavna-jela/02572-spageti-bolonjeze.jpg',
        [
            new Ingredient('Pasta',1),
            new Ingredient('Paradajz',5),
            new Ingredient('Mleveno meso',500)
        ]),
        new Recipe('Sendvic sa sunkom',
        'Sunka postavljena izmedju dva parceta hleba',
        'https://aska.rs/wp-content/uploads/2017/09/sendvic.jpg',
        [
            new Ingredient('Hleb',1),
            new Ingredient('List Sunke',2)
        ])
      ]; 

      constructor(private slService:ShoppingListServices){}
      
      getRecipes(){
          return this.recipes.slice();
      }

      recipeSelected=new Subject<Recipe>();

      addIngredientsToShoppingList(ing:Ingredient[]){
        this.slService.addIngredients(ing);
      }
      
      getRecipeById(index:number){
          return this.recipes[index];
      }

      //Forma
      addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        //Kada dodje do promene 
        this.recipesChanged.next(this.recipes.slice());
      }
      //Form Edit Exiting Recipe
      updateRecipes(index:number,newRecipe:Recipe){
        this.recipes[index]=newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipes(index:number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }
}