import { Component,OnInit } from '@angular/core';
import { PizzaService } from '../services/pizze/pizza.service';
import { CommonModule } from '@angular/common';
import { Pizze } from '../ServiceComponentShare/models/Pizze';
import { StarratingComponent } from '../starrating/starrating.component';
import { ActivatedRoute} from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { TagsComponent } from '../tags/tags.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,
    StarratingComponent,
    SearchComponent,
    TagsComponent,
    NotFoundComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  pizzes:Pizze[] = []
  constructor(private pizzaService:PizzaService, private route:ActivatedRoute,){}

  // status: boolean = false;

  ngOnInit():void{
    this.route.params.subscribe(params =>{
      if(params['searchTerm']){
        this.pizzes = this.pizzaService.getAllPizzeBySearchTerm(params['searchTerm']) ;
      }else if(params['tag']){//it the :tag in the route class like searchterm
        this.pizzes= this.pizzaService.getAllPizzeByTag(params['tag']);
      }
      else{
        this.pizzes=this.pizzaService.getall();
      }
    });//when change write the function in the params
  }
  
}

