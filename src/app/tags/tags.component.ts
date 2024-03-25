import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tag } from '../ServiceComponentShare/models/Tag';
import { OnInit } from '@angular/core';
import { PizzaService } from '../services/pizze/pizza.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  tags:Tag[] = [];

  //inject the pizza service
  constructor(private pizzaService:PizzaService){}
  
  ngOnInit(): void {
    this.tags = this.pizzaService.getAllTags();
  }
  
}
