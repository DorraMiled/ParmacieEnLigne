import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
// import { OwlOptions } from 'ngx-owl-carousel-o';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/common/types/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  // customOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: false,
  //   touchDrag: false,
  //   pullDrag: false,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   nav: true
  // }

  newProducts: Product[] = [];
  featuredProducts: Product[] = [];
  bannerImages: Product[] = [];


  constructor(
    private customerService: CustomerService,
    private cartService: CartService,
  ) {
  }

  ngOnInit() {
    this.customerService.getFeaturedProducts().subscribe((result) => {
      this.featuredProducts = result;
      console.log(this.featuredProducts);
      this.bannerImages.push(...result);
    });

    this.customerService.getFeaturedProducts().subscribe((result) => {
      this.newProducts = result;
      console.log(this.newProducts);
      this.bannerImages.push(...result);
    });


  }
}
