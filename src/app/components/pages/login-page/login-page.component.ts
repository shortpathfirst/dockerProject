import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { InputContainerComponent } from '../../login/input-container/input-container.component';
import { InputValidationComponent } from '../../login/input-validation/input-validation.component';
import { TextInputComponent } from '../../login/text-input/text-input.component';
import { DefaultButtonComponent } from '../../login/default-button/default-button.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,
    InputContainerComponent,InputValidationComponent,TextInputComponent,DefaultButtonComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit{
  //Angular Reactive form
  loginForm!:FormGroup;
  isSubmitted = false;
  returnUrl = '';
  constructor(private formBuilder:FormBuilder, 
    private userSerivce:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router){}
  
  ngOnInit(): void {
    this.loginForm =  this.formBuilder.group({
      email:['',[Validators.required,Validators.email]], // initial value and validator(invalid when empty)
      password:['',Validators.required]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl']; //Get the latest value of route without subscribe to it, not params but everything after the //?returnUrl=/checkout
  }
  //loginForm.controls.email
  //We make loginform.controls a property to write fc.email
  get fc(){
    return this.loginForm.controls; //Email and password are the Input or controls
  }

submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    // alert(`email: ${this.fc['email'].value} ,
    //  password:${this.fc['password'].value}`)
  
   /// ADD LOGIN
   this.userSerivce.login({email:this.fc['email'].value, password:this.fc['password'].value}).subscribe(
    () =>{
      this.router.navigateByUrl(this.returnUrl);
    }
   )
}




}
