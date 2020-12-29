import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import { ShoppingListServices } from './shopping-list.services';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[];
  
  constructor(private slService:ShoppingListServices) { }

  ngOnInit(){
    this.ingredients=this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) =>{
        this.ingredients=ingredients;
      }
    )
  }
  
}
