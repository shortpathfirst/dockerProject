import { Component } from '@angular/core';
import { Cart } from '../ServiceComponentShare/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { OnInit } from '@angular/core';
import { CartItem } from '../ServiceComponentShare/models/CartItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, FormsModule,NotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit {
  cart!:Cart;

  constructor(private cartService:CartService){
    this.setCart();
  }
  ngOnInit(): void {
    
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.pizza.id);
  }
  changeQuantity(cartItem:CartItem,quantityString:string){
    const quantity = parseInt(quantityString);
    this.cartService.changeQuantity(cartItem.pizza.id, quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  getQuantity():number{
    let quantity:number = 0;
    for(let number of this.cart.items){
      quantity+=number.quantity;
    }
    return quantity;
  }
}