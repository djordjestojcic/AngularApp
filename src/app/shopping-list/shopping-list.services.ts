import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
export class ShoppingListServices{
    ingredientsChanged=new EventEmitter<Ingredient[]>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apples', 5),
        new Ingredient ('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ing:Ingredient){
        this.ingredients.push(ing);
        //
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingr:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingr);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}