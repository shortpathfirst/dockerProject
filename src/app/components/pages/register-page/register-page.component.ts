import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PasswordMatchValidator } from '../../../ServiceComponentShare/validators/password_match_validator';
import { IUserRegister } from '../../../ServiceComponentShare/interfaces/IUserRegister';
import { TextInputComponent } from '../../login/text-input/text-input.component';
import { InputValidationComponent } from '../../login/input-validation/input-validation.component';
import { InputContainerComponent } from '../../login/input-container/input-container.component';
import { DefaultButtonComponent } from '../../login/default-button/default-button.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,TextInputComponent,InputValidationComponent,InputContainerComponent,DefaultButtonComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {
    registerForm!:FormGroup;
    isSubmitted = false;
    returnUrl= '';
    
    constructor(
      private formBuilder:FormBuilder,
      private userService:UserService, //.register
      private activatedRoute: ActivatedRoute, //get the returnUrl
      private router:Router){

      }
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address:['',[Validators.required]],
      //Validator for the password = confirm

      //We created an apposit validator
    },{validators: PasswordMatchValidator('password','confirmPassword')
  }
  
    );
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }
  get fc(){
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;
    const fv= this.registerForm.value; // fv form values
    //to use fv.name
    const user:IUserRegister ={
      name:fv.name,
      email: fv.email,
      password:fv.password,
      confirmPassword:fv.password,
      address:fv.address

    };
    this.userService.register(user).subscribe(_=>{
      this.router.navigateByUrl(this.returnUrl);
    })
  }
    
}
