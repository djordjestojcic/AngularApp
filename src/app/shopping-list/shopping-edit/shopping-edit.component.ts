import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredients.model';
import { ShoppingListServices } from '../shopping-list.services';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static:false}) nameInputRef:ElementRef;
  @ViewChild('amountInput',{static:false}) amountInputRef:ElementRef;
  constructor(private slService:ShoppingListServices) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient=new Ingredient(ingName,ingAmount);
    this.slService.addIngredient(newIngredient);
  }
  onDeleteItem(){}
  onClearItem(){}

}
