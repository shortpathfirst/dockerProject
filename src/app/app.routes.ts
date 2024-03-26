import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PizzaPageComponent } from './pizza-page/pizza-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
// import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
export const routes: Routes = [

    //{path:'',component:HeaderComponent},
    {path:'', component:HomeComponent},
    {path:'search/:searchTerm',component:HomeComponent},
    {path:'tag/:tag',component:HomeComponent},
    {path:'pizza/:id',component:PizzaPageComponent},
    {path:'cart-page',component:CartPageComponent}
];

// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]
// })
// export class AppRoutingModule{}