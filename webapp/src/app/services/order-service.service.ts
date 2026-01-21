import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/types/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(
    private http: HttpClient,
  ) { }

  addOrder(order: Order) {
    return this.http.post(environment.apiUrl + "/customer/order", order);
  }

  getCustomerOrders() {
    return this.http.get<Order[]>(environment.apiUrl + '/customer/orders');
  }

  getAdminOrder() {
    return this.http.get<Order[]>(environment.apiUrl + '/orders');
  }

  updateOrderStatus(id: string, status: string) {
    return this.http.post(environment.apiUrl + '/orders/' + id, {
      status: status,
    });
  }
}
