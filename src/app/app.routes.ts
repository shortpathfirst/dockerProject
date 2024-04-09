import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { PizzaPageComponent } from './components/pages/pizza-page/pizza-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [

    {path:'', component:HomeComponent},
    {path:'search/:searchTerm',component:HomeComponent},
    {path:'tag/:tag',component:HomeComponent},
    {path:'pizza/:id',component:PizzaPageComponent},
    {path:'cart-page',component:CartPageComponent},
    {path:'login',component:LoginPageComponent},
    {path:'register',component:RegisterPageComponent},
    {path:'checkout',component:CheckoutPageComponent, canActivate:[authGuard]},
    
];

