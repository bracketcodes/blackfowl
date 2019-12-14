import { Injectable } from '@angular/core';
import { Order } from './orders.model'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ordersList: Order[] =[
    {
      id: 123,
      name: 'danush',
      address: 'some - address'
    },
    {
      id: 123,
      name: 'danush',
      address: 'some - address'
    }
  ]

  constructor() { }

  getAllOrders() {

    return [...this.ordersList]
  }
}
