import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {Ingredient} from '../shared/ingredients.model';
import { ShoppingListServices } from './shopping-list.services';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientSub: Subscription;

  constructor(private slService:ShoppingListServices) { }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.ingredientSub = this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients = ingredients;
      }
    )
  }

  onEditItem(index:number){
    this.slService.startedEdititng.next(index);
  }

  ngOnDestroy(){
    this.ingredientSub.unsubscribe();
  }

  
  
}
