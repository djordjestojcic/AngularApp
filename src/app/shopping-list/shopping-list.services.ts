//import { EventEmitter } from '@angular/core';
import {Ingredient} from '../shared/ingredients.model';
import { Subject } from 'rxjs';
export class ShoppingListServices{
    //ingredientsChanged=new EventEmitter<Ingredient[]>();
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEdititng = new Subject<number>();
    private ingredients:Ingredient[]=[
        new Ingredient('Apples', 5),
        new Ingredient ('Tomatoes', 10)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }

    addIngredient(ing:Ingredient){
        this.ingredients.push(ing);
        //
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingr:Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingr);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number, newIngredient:Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index, 1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}