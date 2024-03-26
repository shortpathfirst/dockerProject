import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaPageComponent } from './pizza-page/pizza-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'search/:searchTerm',component:HomeComponent},
    {path:'tag/:tag',component:HomeComponent},
    {path:'pizza/:id',component:PizzaPageComponent},
    {path:'cart-page',component:CartPageComponent}
];

