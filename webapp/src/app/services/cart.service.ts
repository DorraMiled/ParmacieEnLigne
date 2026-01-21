import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/types/product';
import * as e from 'cors';
import { environment } from 'src/environments/environment';
import { CartItem } from '../common/types/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient
  ) { }
  items: CartItem[] = [];

  init() {
    this.getCartItems().subscribe(result => {
      this.items = result;
    })
  }

  getCartItems() {
    return this.http.get<CartItem[]>(environment.apiUrl + '/customer/carts');
  }

  addToCart(productId: string, quantity: number) {
    return this.http.post(environment.apiUrl + '/customer/carts/' + productId, {
      quantity: quantity,
    });
  }

  removefromCart(productId: string) {
    return this.http.delete(environment.apiUrl + '/customer/carts/' + productId);
  }
}
