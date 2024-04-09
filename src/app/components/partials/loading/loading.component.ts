import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../services/loading/loading.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit{

  isLoading!:boolean;

  //Using it in the constractor the whole app get notified
  constructor(loadingService: LoadingService){
    loadingService.isLoading.subscribe((isLoading)=>{
      this.isLoading = isLoading;
    });

  }
  ngOnInit(): void {
    
  }
}
