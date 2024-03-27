import { Pizze } from "./Pizze";
export class CartItem{

    constructor(public pizza:Pizze){
        //this.pizza = pizza; automatic done 
        this.Price; //getter setter ts 
    }
    // pizza:Pizze;
    quantity:number = 1;
    
    get Price():number{
        return this.pizza.price * this.quantity;
    }
}