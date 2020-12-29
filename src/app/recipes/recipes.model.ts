import {Ingredient} from '../shared/ingredients.model';
export class Recipe{
    constructor(
        public name:string,
        public description:string,
        public imgPath:string,
        public ingredients:Ingredient[]
    ){}
}