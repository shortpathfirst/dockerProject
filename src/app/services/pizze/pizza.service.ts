import { Injectable } from '@angular/core';
import { Pizze } from '../../ServiceComponentShare/models/Pizze';
import { Tag } from '../../ServiceComponentShare/models/Tag';
import * as pizzeJSON from '../../pizzainfo.json' ;
import { NotFoundError } from 'rxjs';
import { CartItem } from '../../ServiceComponentShare/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
  getPizzaById(id: number):Pizze{
    //Mock server
    return this.getall().find(pizze => pizze.id == id)!; // ! mark that it cannot be UNDEFINED IT MUST RETURN A VALUE
  }
  getAllTags():Tag[]{
    //Mock data coming from the server
    return[
      {name:'All',count:14},
      {name:'Crunchy',count:4},
      {name:'Pizza',count:2},
      {name:'ALegna',count:3},
      {name:'Gourmet',count:14},
      {name:'Classica',count:2},
    ]
  }
  getAllPizzeBySearchTerm(searchTerm:string):Pizze[]{
    return this.getall().filter(pizze=>pizze.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllPizzeByTag(tag:string):Pizze[]{
    // if(tag =='All')
    //   return this.getall();
    // else this.getall().filter(pizze => pizze.tags?.includes(tag))
    
    //With ternary operator
    return tag == "All"?
    this.getall(): 
    this.getall().filter(pizze => pizze.tags?.includes(tag))
  }
  getall():Pizze[]{

    let pizzaArray:Pizze[] = [];
    let p:Pizze;
    for (let i = 0; i < pizzeJSON.pizze.length; i++){
        p= new Pizze(
          pizzeJSON.pizze[i].id,
          pizzeJSON.pizze[i].name,
          pizzeJSON.pizze[i].price,
          pizzeJSON.pizze[i].favorite,
          pizzeJSON.pizze[i].imageUrl,
          pizzeJSON.pizze[i].origins,
          pizzeJSON.pizze[i].cookTime,
          pizzeJSON.pizze[i].stars,
          pizzeJSON.pizze[i].tags
         );
      pizzaArray.push(p);
    }

    //Stampa errori immagini non trovate
  return pizzaArray;
    
  }


}
