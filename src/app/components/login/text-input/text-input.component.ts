import { Component, Input, OnInit } from '@angular/core';
import { InputValidationComponent } from '../input-validation/input-validation.component';
import { InputContainerComponent } from '../input-container/input-container.component';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [CommonModule,InputValidationComponent,InputContainerComponent,ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent implements OnInit{
//ReactiveFormsModule IMPORT TO USE [formControl]
  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean = true;
  @Input()
  label!:string;
  @Input()
  type: 'text' | 'password' |'email' = 'text' //ts made it a variable
  
  get formControl(){ //to cast control input
    return this.control as FormControl;
  }
  ngOnInit(): void {
    
  }
}
