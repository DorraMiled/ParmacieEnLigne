import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/types/product';
import { environment } from 'src/environments/environment';
import { Catgeory } from '../common/types/category';
import { Brand } from '../common/types/brand';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }

  getNewProducts() {
    return this.http.get<Product[]>(environment.apiUrl + "/customer/home/new-products");
  }

  getFeaturedProducts() {
    return this.http.get<Product[]>(environment.apiUrl + "/customer/home/feartured-products");
  }
  getCategories() {
    return this.http.get<Catgeory[]>(environment.apiUrl + '/customer/categories');
  }

  getBrands() {
    return this.http.get<Brand[]>(environment.apiUrl + '/customer/brands');
  }

  getProducts(searchTerm: string, categoryId: string, sortBy: string, sortOrder: number, brandId: string, page: number, pageSize: number) {
    return this.http.get<Product[]>(environment.apiUrl + `/customer/products?searchTerm=${searchTerm}&categoryId=${categoryId}&sortBy=${sortBy}&sortOrder=${sortOrder}&brandId=${brandId}&page=${page}&pageSize=${pageSize}`)
  }

  getProductById(id: string) {
    return this.http.get<Product[]>(environment.apiUrl + '/customer/product/' + id);
  }
}
