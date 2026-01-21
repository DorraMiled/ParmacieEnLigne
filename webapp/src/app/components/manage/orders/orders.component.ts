import { Component } from '@angular/core';
import { Order } from 'src/app/common/types/order';
import { Product } from 'src/app/common/types/product';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders: Order[] = [];
  constructor(
    private orderService: OrderServiceService,
  ) { }

  ngOnInit() {
    this.orderService.getAdminOrder().subscribe(result => {
      this.orders = result;
    })
  }

  sellingPrice(product: Product) {
    const price = Number(product.Price);
    const discount = Number(product.discount);
    return price - (price * discount) / 100;
  }

  statusChanged(button: any, order: Order) {
    this.orderService.updateOrderStatus(order._id!, button.value).subscribe(result => {
      alert("order status updates");
    })

  }


}
