import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Order } from '../../../ServiceComponentShare/models/Order';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'order-items-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-items-list.component.html',
  styleUrl: './order-items-list.component.css'
})
export class OrderItemsListComponent {
  
  @Input()
  order!:Order;


}
