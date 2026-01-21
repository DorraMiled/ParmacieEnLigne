import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/common/types/product';
import { OrderServiceService } from 'src/app/services/order-service.service';
import { Order } from 'src/app/common/types/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.scss'],

})
export class ShoppingCardComponent {
  orderStep = 0;
  paymentType = "cash";
  duration = '2000ms';

  constructor(
    private cartService: CartService,
    private formbuilder: FormBuilder,
    private orderService: OrderServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartService.init();
  }

  addressForm = this.formbuilder.group({
    address1: [''],
    address2: [''],
    city: [''],
    pincode: [''],

  })

  get cartItems() {
    return this.cartService.items;
  }

  sellingPrice(product: Product) {
    const price = Number(product.Price);
    const discount = Number(product.discount);
    return price - (price * discount) / 100;
  }

  addToCart(productId: string, quantity: number) {
    this.cartService.addToCart(productId, quantity).subscribe(result => {
      this.cartService.init();
    })
  }

  get totalAmount() {
    let amount = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      const element = this.cartItems[i];
      amount += this.sellingPrice(element.product) * element.quantity;
    }
    return amount;

  }

  checkout() {
    this.orderStep = 1;

  }

  addAddress() {
    this.orderStep = 2;

  }

  completeOrder() {
    let order: Order = {
      items: this.cartItems,
      paymentType: this.paymentType,
      address: this.addressForm.value,
      date: new Date(),
    };
    this.orderService.addOrder(order).subscribe(result => {
      alert("Your order is completed ");
      this.cartService.init();
      this.orderStep = 0;
      this.router.navigateByUrl('/orders');
    })
    console.log("order:", order);

  }
}
