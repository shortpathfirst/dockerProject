import { Component } from '@angular/core';
import { ActivatedRoute,Route,Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  searchTerm:String ="";
  constructor(private route:ActivatedRoute,private router:Router){

  }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    })
  }
  search():void{ //router write into the route
    if(this.searchTerm)
    this.router.navigateByUrl('/search/'+this.searchTerm)
  }
}
