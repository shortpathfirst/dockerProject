import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  @Input() visible:boolean = false; //or ngIf 
  @Input() notFoundMessage:string ="Nothing Found!";
  @Input() resetLinkText:string="Reset";
  @Input() resetLinkRoute:string="/"
  constructor(){}
}
