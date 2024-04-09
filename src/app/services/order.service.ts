import { Injectable } from '@angular/core';
import { Order } from '../ServiceComponentShare/models/Order';
import { HttpClient } from '@angular/common/http';
import { ORDER_CREATE_URL } from '../ServiceComponentShare/models/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL,order);
  }
  
}
