import { Injectable } from '@angular/core';
import { Cart } from '../../ServiceComponentShare/models/Cart';
import { Pizze } from '../../ServiceComponentShare/models/Pizze';
import { CartItem } from '../../ServiceComponentShare/models/CartItem';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();// new Cart();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(pizza:Pizze):void{
    //Verifico se nel carrello
    let cartItem =  this.cart.items.find(item =>item.pizza.id === pizza.id);
    if(cartItem){//If not null
      this.changeQuantity(pizza.id,cartItem.quantity+1);
      return; //do nothing and to avoid write else
    }
    this.cart.items.push(new CartItem(pizza));
    this.setCartToLocalStorage();
  }

  removeFromCart(pizzaID:number):void{
    this.cart.items =
    this.cart.items.filter(item =>item.pizza.id != pizzaID );
    this.setCartToLocalStorage();
  }

  changeQuantity(pizzaID:number, quantity:number){
    let cartItem = this.cart.items.find(item =>item.pizza.id === pizzaID);
     //Find the item if item id = pizzaID
    if(!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.pizza.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage(); //TO KEEP DATA PERSISTENT ON REFRESH
  }

  getCartObservable():Observable<Cart>{ 
    //to avoid to change cart by the outside
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum,CurrentItem)=>prevSum+CurrentItem.price,0)
    this.cart.totalCount = this.cart.items
    .reduce((prevSum,CurrentItem)=>prevSum+CurrentItem.quantity,0)
    
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',cartJson);
    this.cartSubject.next(this.cart); // notify observer
  }
  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    //use the same key cart you SET
    return cartJson? JSON.parse(cartJson):new Cart();
  }

}
