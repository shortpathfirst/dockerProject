import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATOR_MESSAGES:any={
  required:'Should not be empty',
  email:'Email is not valid',
  minlenght:'Field is too short',
  notMatch:'Password and Confirm does not match'
}

@Component({
  selector: 'input-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements OnInit, OnChanges {
    //Pass validator as input instead of doing it in html
    @Input()
    control!:AbstractControl;
    @Input()
    showErrorWhen:boolean = true; //ngIf
    
    errorMessages:string[] = [];
  
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() =>{
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() =>{
      this.checkValidation();
    });
  } 

  checkValidation(){ //Fill the errorMessage
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = []
      return;
    }
    const errorKeys = Object.keys(errors);
    //Array of errors ["",""] to show
    this.errorMessages = errorKeys.map(key =>VALIDATOR_MESSAGES[key]);
  }


}
