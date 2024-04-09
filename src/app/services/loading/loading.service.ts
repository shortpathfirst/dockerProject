import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  //All the class that use loading will be informed of the state of the loading
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  constructor() { }

  showLoading(){
    this.isLoadingSubject.next(true); //listeners informed true
  }
  hideLoading(){
    this.isLoadingSubject.next(false); 
  }

  get isLoading(){
    return this.isLoadingSubject.asObservable();
  }
}
