import { Component,OnInit } from '@angular/core';
import { PizzaService } from '../services/pizze/pizza.service';
import { CommonModule } from '@angular/common';
import { Pizze } from '../ServiceComponentShare/models/pizze';
import { StarratingComponent } from '../starrating/starrating.component';
import { ActivatedRoute} from '@angular/router';
import { SearchComponent } from '../search/search.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,StarratingComponent,SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  pizzes:Pizze[] = []
  constructor(private pizzaService:PizzaService, private route:ActivatedRoute,){}

  ngOnInit():void{
    this.route.params.subscribe(params =>{
      if(params['searchTerm']){
        this.pizzes = this.pizzaService.getall().filter(pizze=>pizze.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      }else{
        this.pizzes=this.pizzaService.getall();
      }
    });//when change write the function in the params
  }

  
  
}

