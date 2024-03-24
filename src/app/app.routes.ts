import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// import { RouterModule } from '@angular/router';
// import { NgModule } from '@angular/core';
export const routes: Routes = [

    
    //{path:'',component:HeaderComponent},
    {path:'', component:HomeComponent},
    {path:'search/:searchTerm',component:HomeComponent}
    
    ];

// @NgModule({
//     imports:[RouterModule.forRoot(routes)],
//     exports:[RouterModule]
// })
// export class AppRoutingModule{}