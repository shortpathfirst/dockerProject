import { Injectable } from '@angular/core';
import { Cart } from '../../ServiceComponentShare/models/Cart';
import { Pizze } from '../../ServiceComponentShare/models/Pizze';
import { CartItem } from '../../ServiceComponentShare/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  // constructor() { }
  addToCart(pizza:Pizze):void{
    //Verifico se nel carrello
    let cartItem =  this.cart.items.find(item =>item.pizza.id === pizza.id);
    if(cartItem){//If not null
      this.changeQuantity(pizza.id,cartItem.quantity+1);
      return; //do nothing and to avoid write else
    }
    this.cart.items.push(new CartItem(pizza));
  }
  removeFromCart(pizzaID:number):void{
    this.cart.items =
    this.cart.items.filter(item =>item.pizza.id != pizzaID );
  }
  changeQuantity(pizzaID:number, quantity:number){
    let cartItem = this.cart.items.find(item =>item.pizza.id === pizzaID); //Find the item if item id = pizzaID
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart():Cart{
    return this.cart;
  }
}
