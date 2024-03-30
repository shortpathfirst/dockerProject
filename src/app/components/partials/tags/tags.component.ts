import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../../../ServiceComponentShare/models/Tag';
import { OnInit } from '@angular/core';
import { PizzaService } from '../../../services/pizze/pizza.service';
import { RouterLink } from '@angular/router';
import { Input } from '@angular/core';
@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  tags?:Tag[];

  @Input()
  pizzaPageTags?:string[]; //not to include count 
  //inject the pizza service
  @Input()
  justifyContent:string ='center'; //to change css of pizza page
  constructor(private pizzaService:PizzaService){}
  
  ngOnInit(): void {
    if(!this.pizzaPageTags) //If tag not avaiable print all else it print only tagName 
    this.pizzaService.getAllTags().subscribe(serverTags =>{
      this.tags = serverTags;
    })
  }
  
}
