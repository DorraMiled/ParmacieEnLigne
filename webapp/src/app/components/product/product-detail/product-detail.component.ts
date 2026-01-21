import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/common/types/product';
import { ProductCardComponent } from '../../product-card/product-card.component';
import { CartService } from 'src/app/services/cart.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']

})
export class ProductDetailComponent {

  product!: Product;
  mainImage!: string;
  similarProducts: Product[] = [];

  constructor(
    private costumerService: CustomerService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    const id = this.route.params.subscribe((x: any) => {
      this.getProductDetails(x.id);
    })

  }

  getProductDetails(id: string) {
    this.costumerService.getProductById(id).subscribe((result: any) => {
      this.product = result;
      this.mainImage = this.product.images[0].url;
      console.log(this.product);

      this.costumerService.getProducts('', this.product.categoryId, '', -1, '', 1, 4).subscribe(result => {
        this.similarProducts = result;
      })

    })
  }
  changeImage(url: string) {
    this.mainImage = url;
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
        console.log("okkkkkkkkkkkkkkkkk");

      });
    } else {
      this.cartService.removefromCart(product._id!).subscribe(() => {
        this.cartService.init();
        console.log("revv");

      });

    }
  }

  isProductInCart(productId: string) {
    if (this.cartService.items.find(x => x.product?._id == productId)) {
      return true;
    } else {
      return false;
    }
  }

}
