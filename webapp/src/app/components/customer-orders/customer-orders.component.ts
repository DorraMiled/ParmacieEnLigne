import { Component } from '@angular/core';
import { Order } from 'src/app/common/types/order';
import { Product } from 'src/app/common/types/product';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss']
})
export class CustomerOrdersComponent {

  orders: Order[] = [];

  constructor(
    private orderService: OrderServiceService
  ) { }

  ngOnInit() {
    this.orderService.getCustomerOrders().subscribe((result) => {
      this.orders = result;
      console.log(this.orders);
    })
  }

  sellingPrice(product: Product) {
    const price = Number(product.Price);
    const discount = Number(product.discount);
    return price - (price * discount) / 100;
  }
}
