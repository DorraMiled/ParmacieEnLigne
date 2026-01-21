import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/types/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient,
  ) { }

  getProducts() {
    return this.http.get<Product[]>(environment.apiUrl + '/product');
  }

  getProductById(id: string) {
    return this.http.get<Product>(environment.apiUrl + '/product/' + id);
  }

  /*addProducts(name: string) {
    return this.http.post(environment.apiUrl + '/product', {
      name: name
    });
  }*/
  addProduct(product: Product) {
    return this.http.post(environment.apiUrl + '/product', product);
  }


  UpdateProduct(id: string, product: Product) {
    return this.http.put(environment.apiUrl + '/product/' + id, {
      product: product
    });
  }

  deleteProductById(id: string) {
    return this.http.delete(environment.apiUrl + '/product/' + id);
  }
}
