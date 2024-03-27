import { Component, } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CartService } from '../../../services/cart/cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{ 
  cartQuantity = 0;
  constructor(cartService:CartService){
    cartService.getCartObservable().subscribe((newCart)=>{this.cartQuantity = newCart.totalCount})
  }
}

