import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { Product } from 'src/app/common/types/product';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Catgeory } from 'src/app/common/types/category';
import { Brand } from 'src/app/common/types/brand';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],

})
export class ProductListComponent {
  searchTerm: string = '';
  categoryId: string = '';
  sortBy: string = '';
  sortOrder: number = -1;
  brandId: string = '';
  products: Product[] = [];
  // @Input() product!: Product;
  page = 1;
  pageSize = 6;
  category: Catgeory[] = [];
  brands: Brand[] = [];

  isNext = true;




  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,

  ) {
  }

  ngOnInit() {
    this.customerService.getCategories().subscribe(result => {
      this.category = result
    })
    this.customerService.getBrands().subscribe(result => {
      this.brands = result
    })
    this.route.queryParams.subscribe((x: any) => {
      this.searchTerm = x.search || '';
      this.categoryId = x.categoryId || '';
      this.getProducts();
    })
  }

  getProducts() {
    setTimeout(() => {
      this.customerService.getProducts(this.searchTerm, this.categoryId, this.sortBy, this.sortOrder, this.brandId, this.page, this.pageSize).subscribe(result => {
        this.products = result;
        if (result.length < this.pageSize) {
          this.isNext = false;
        }
      });
    }, 2000)
  }
  orderChange(event: any) {
    this.sortBy = 'Price';//Price
    this.sortOrder = event;
    this.getProducts();
  }

  pageChange(page: number) {
    this.page = page;
    this.isNext = true;
    this.getProducts();
  }

}
