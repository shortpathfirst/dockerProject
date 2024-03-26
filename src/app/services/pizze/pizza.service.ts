import { Injectable } from '@angular/core';
import { Pizze } from '../../ServiceComponentShare/models/pizze';
import { Tag } from '../../ServiceComponentShare/models/Tag';
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
    //########## TO DO , GET LIST OF FILES OF A DIRECTORY
    // only work in NODE JS
    //var fs = require('fs');
    //var files = fs.readdirSync('/assets/images/pizze/');
    // const pizze:String[] = ['A legna','bonci','Contemporanea','gourmet','Napoletana','Verace'];
    // let immagini:String[] = [];

    // for(let pizza of pizze){
    //   immagini.push('assets/images/pizze/'+pizza+'.jpg')
    // }
    //const pizzeInfo = JSON.parse('assets/pizzainfo.json')
    
    let Pizza0 = new Pizze(1,'Pizza a legna',10,true,'/assets/images/pizze/A legna.jpg',['italy'],'10-20',4.5,['Crunchy', 'Pizza', 'ALegna']);
    let Pizza1 = new Pizze(2,'Pizza Bonci',10,false,'/assets/images/pizze/bonci.jpg',['italy'],'10-20',3,['Crunchy','Pizza','Teglia']);
    let Pizza2 = new Pizze(3,'Pizza Pizza contemporanea',10,true,'/assets/images/pizze/Contemporanea.jpg',['italy'],'10-20',4,['Pizza', 'Gourmet']);
    let Pizza3 = new Pizze(4,'Pizza Gourmet',20,false,'/assets/images/pizze/gourmet.jpg',['italy','Milan'],'10-20',2.5,['Pizza','Gourmet']);
    let Pizza4 = new Pizze(5,'Pizza Verace',8,true,'/assets/images/pizze/Verace.jpg',['italy','Napoli'],'10-20',5,['Pizza', 'Classica']);
    let Pizza5 = new Pizze(6,'Pizza Napoletana',12,false,'/assets/images/pizze/Napoletana.jpg',['italy','Napoli'],'10-20',1,['Classica', 'Pizza']);
    
     return [Pizza0,Pizza1,Pizza2,Pizza3,Pizza4,Pizza5];
    //Stampa errori immagini non trovate
    
  }

}
