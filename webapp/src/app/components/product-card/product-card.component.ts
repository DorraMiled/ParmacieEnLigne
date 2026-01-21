import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/common/types/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],

})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(
    private cartService: CartService,
  ) {

  }
  get sellingPrice() {
    const price = Number(this.product.Price);
    const discount = Number(this.product.discount);
    return price - (price * discount) / 100;
  }

  addTocart(product: Product) {
    if (!this.isProductInCart(product._id!)) {
      this.cartService.addToCart(product._id!, 1).subscribe(() => {
        this.cartService.init();
      });
    } else {
      this.cartService.removefromCart(product._id!).subscribe(() => {
        this.cartService.init();
      });

    }
  }

  isProductInCart(productId: string) {
    if (this.cartService.items.find(x => x.product._id == productId)) {
      return true;
    } else {
      return false;
    }
  }

}
