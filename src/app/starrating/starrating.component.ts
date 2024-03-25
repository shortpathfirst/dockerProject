import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { Input,Output } from '@angular/core';
import { HostListener } from '@angular/core';
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

  inputSelection=0;
  mouseEnterSelection = 0;
 
  @Output() onRating = new EventEmitter<number>();


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
  
  HandleMouseEnter(index:number){
    this.inputSelection= this.stars;
    this.mouseEnterSelection = index;
    this.stars = index;
    new MouseEvent("mousemove").clientX;
  }
  HandleMouseLeave(){
    this.stars = this.inputSelection;//Ritorna al input
  }
  Rating(index:number){
    this.inputSelection = index;
    this.stars = this.inputSelection;
    this.onRating.emit(index); //Emit al componente padre per cambiare il valore
  }

 }
