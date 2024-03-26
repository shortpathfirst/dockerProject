import { Pizze } from "./pizze";
export class CartItem{

    constructor(pizza:Pizze){
        this.pizza = pizza;
        this.Price; //getter setter ts 
    }
    pizza:Pizze;
    quantity:number = 1;

    get Price():number{
        return this.pizza.price * this.quantity;
    }
}