import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Pizze } from '../../../ServiceComponentShare/models/Pizze';
import { PizzaService } from '../../../services/pizze/pizza.service';
import { StarratingComponent } from '../../partials/starrating/starrating.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { CartService } from '../../../services/cart/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-pizza-page',
  standalone: true,
  imports: [CommonModule,StarratingComponent,TagsComponent,NotFoundComponent],
  templateUrl: './pizza-page.component.html',
  styleUrl: './pizza-page.component.css'
})
export class PizzaPageComponent implements OnInit {
  piz!: Pizze;
  
  constructor(private activatedRoute:ActivatedRoute,
     private pizzaService:PizzaService,
     private cartService:CartService,
     private router:Router){

    activatedRoute.params.subscribe((params)=>{
      if(params['id']){
        this.piz = pizzaService.getPizzaById(params['id']);
      }
    }) // when it change it can be notified in this function
  } 

  ngOnInit(): void {
    
  }

  addToCart(){
    this.cartService.addToCart(this.piz);
    this.router.navigateByUrl('/cart-page') //the same as <a routerlink >
  }
  
}
