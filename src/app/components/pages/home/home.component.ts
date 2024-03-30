import { Component,OnInit } from '@angular/core';
import { PizzaService } from '../../../services/pizze/pizza.service';
import { CommonModule } from '@angular/common';
import { Pizze } from '../../../ServiceComponentShare/models/Pizze';
import { StarratingComponent } from '../../partials/starrating/starrating.component';
import { ActivatedRoute} from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';
import { RouterLink } from '@angular/router';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,
    StarratingComponent,
    SearchComponent,
    TagsComponent,
    NotFoundComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  pizzes:Pizze[] = []
  constructor(private pizzaService:PizzaService, private route:ActivatedRoute,){
    
    let pizzaObservable:Observable<Pizze[]>; // to avoid .subscribe for each method separately
    
    route.params.subscribe(params =>{
      if(params['searchTerm']){
        pizzaObservable = this.pizzaService.getAllPizzeBySearchTerm(params['searchTerm']) ;
      }else if(params['tag']){//it the :tag in the route class like searchterm
        pizzaObservable= this.pizzaService.getAllPizzeByTag(params['tag']);
      }
      else{
        pizzaObservable=pizzaService.getAll();

        pizzaObservable.subscribe((serverPizza)=>{
          this.pizzes = serverPizza;
        })
      }
    });
  
  }

  // status: boolean = false;

  ngOnInit():void{
    //when change write the function in the params
  }
  
}

