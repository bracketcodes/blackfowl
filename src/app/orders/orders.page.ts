import { Component, OnInit } from '@angular/core';
import { OrdersService } from './orders.service';
import { Order } from './orders.model';
import { AlertController } from '@ionic/angular'
import { from } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  private ordersList: Order[];

  constructor(private ordersService: OrdersService,
              private popUp: AlertController) { }

  ngOnInit() {
    this.ordersList = this.ordersService.getAllOrders()
  }

  onPickup(order) {
    this.popUp.create({
      header: 'Address to pickup',
      message: order.address,
      buttons: [{
        text: 'Pick-up',
        handler: () => {
          console.log('pick-up')
        }
      }] 
    }).then( (alertElement) => {
      alertElement.present()
    })   
  }
}
