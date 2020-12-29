import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router'

import { RecipesDetailsComponent } from "./recipes/recipes-details/recipes-details.component";
import { RecipesEditComponent } from "./recipes/recipes-edit/recipes-edit.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipesComponent } from "./recipes/recipes.component"; 
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes:Routes = [ 
    { path: '', redirectTo: '/recipes', pathMatch: 'full' }, //redirekt ka putanji, pathMatch: posto je prazna ruta, mora da se doda da bi se izvrsio redirekt
    { path: 'recipes', component: RecipesComponent, children:[
        { path: '', component: RecipesStartComponent },
        { path: 'new' , component: RecipesEditComponent }, //direktni putevi pre dinamickih
        { path: ':id' , component: RecipesDetailsComponent },
        { path: ':id/edit', component: RecipesEditComponent}
    ]},
    { path:'shopping-list', component: ShoppingListComponent }
];

@NgModule({ 
    imports:[ 
        RouterModule.forRoot(appRoutes) 
    ],
    exports:[ 
        RouterModule
    ]
}) 
export class AppRoutingModule {
    
}
