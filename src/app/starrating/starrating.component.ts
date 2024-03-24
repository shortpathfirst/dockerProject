import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Input,Output } from '@angular/core';
@Component({
  selector: 'star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starrating.component.html',
  styleUrl: './starrating.component.css'
})
export class StarratingComponent {
  @Input()
  stars!:number;

  @Input()
  size:number =2;

 @Input() SelectedStar=0;
  previousSelection=0;
  // @Output() //send to the parent component 
  // onRating:EventEmitter<number> = new EventEmitter<number>();
  
  get styles(){
    return{
      'width.rem': this.size,
      'height.rem':this.size,
      'marginRight.rem':this.size/6,
    }
  }
  getStarImage(current:number):string{
    
    const previousHalf = current -0.5;
    const imageName=this.stars >= current
    ? 'star-full'
    :this.stars >=previousHalf
    ?'star-half'
    :'star-empty';
    
    return `assets/stars/${imageName}.svg`

  }
//   HandleMouseEnter(index:number){
//     this.SelectedStar=index+1;
//     this.getStarImage(index);
    
//   }
//   HandleMouseLeave(){
//     if(this.previousSelection !== 0){
//       this.SelectedStar = this.previousSelection;
//     }else{
//       this.SelectedStar=0;
//     }
//     this.getStarImage(this.previousSelection);
//   }
//   Rating(index:number){
//     this.SelectedStar = index +1;
//     this.previousSelection = this.SelectedStar;
//     this.onRating.emit(this.SelectedStar+1);
//     this.getStarImage(this.SelectedStar); 
//     //cambio valore di rating in pizze
//   }
 }
