import { Component, OnInit } from '@angular/core';
import { Order } from '../../../ServiceComponentShare/models/Order';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from '../../login/input-container/input-container.component';
import { DefaultButtonComponent } from '../../login/default-button/default-button.component';
import { InputValidationComponent } from '../../login/input-validation/input-validation.component';
import { TextInputComponent } from '../../login/text-input/text-input.component';
import { CartService } from '../../../services/cart/cart.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user/user.service';
import { ToastrService } from 'ngx-toastr';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { MapComponent } from '../../partials/map/map.component';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,
    InputContainerComponent,
    DefaultButtonComponent,
    InputValidationComponent,
    TextInputComponent,
    OrderItemsListComponent,
    MapComponent],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent implements OnInit {
  order:Order = new Order();
  checkoutForm!:FormGroup;
  constructor(cartService:CartService,
    private formBuilder:FormBuilder,
    private userService:UserService,
    private toastrService:ToastrService,
    private orderService:OrderService,
    private router:Router
  ){
    const cart = cartService.getCart();
    this.order.items =  cart.items;
    this.order.totalPrice = cart.totalPrice;
  }
  ngOnInit(): void {
    let {name,address} = this.userService.currentUser;
    this.checkoutForm = this.formBuilder.group({
      name:[name,Validators.required],
      address:[address,Validators.required],
    })
  }
  get fc(){
    return this.checkoutForm.controls;
  }
  createOrder(){
    if(this.checkoutForm.invalid){
      this.toastrService.warning('Please fill the inputs','Invalid Inputs');
      return;
    }

    if(!this.order.addressLatLng){
      this.toastrService.warning('Please select your location on the map','Location');
      return;
    }
    //Check is valid
    this.order.name = this.fc['name'].value;
    this.order.address = this.fc['address'].value;
    /////to remove
    console.log(this.order);
    /////to remove
    this.orderService.create(this.order).subscribe({
      next:() =>{
        this.router.navigateByUrl('/payment');
      },
      error:(errorResponse)=>{
        this.toastrService.error(errorResponse.error,'Cart');

      }
    })
  }
}
