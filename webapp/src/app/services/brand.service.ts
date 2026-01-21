import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Brand } from '../common/types/brand';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(
    private http: HttpClient,
  ) { }

  getBrands() {
    return this.http.get<Brand[]>(environment.apiUrl + '/brand');
  }

  getBrandById(id: string) {
    return this.http.get<Brand>(environment.apiUrl + '/brand/' + id);
  }

  addBrands(name: string) {
    return this.http.post(environment.apiUrl + '/brand', {
      name: name
    });
  }


  UpdateBrand(id: string, name: string) {
    return this.http.put(environment.apiUrl + '/brand/' + id, {
      name: name
    });
  }

  deleteBrandById(id: string) {
    return this.http.delete(environment.apiUrl + '/brand/' + id);
  }

}
