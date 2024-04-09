import { Component, OnInit, } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CartService } from '../../../services/cart/cart.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../ServiceComponentShare/models/User';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink,MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{ 
  cartQuantity = 0;
  user!:User;
  constructor(cartService:CartService,private userService:UserService){
    
    cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount
    })
    userService.userObservable.subscribe((newUser)=>{
      this.user = newUser
    });
  }
  ngOnInit(): void {
    
  }
  logout(){
    this.userService.logout();
  }
  get isAuth(){
    return this.user.token;
   }
}

