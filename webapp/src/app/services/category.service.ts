import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catgeory } from '../common/types/category';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient,
  ) { }

  getCategories() {
    return this.http.get<Catgeory[]>(environment.apiUrl + '/category');
  }

  getCategoryById(id: string) {
    return this.http.get<Catgeory>(environment.apiUrl + '/category/' + id);
  }

  addCategories(name: string) {
    return this.http.post(environment.apiUrl + '/category', {
      name: name
    });
  }


  UpdateCategory(id: string, name: string) {
    return this.http.put(environment.apiUrl + '/category/' + id, {
      name: name
    });
  }

  deleteCategoryById(id: string) {
    return this.http.delete(environment.apiUrl + '/category/' + id);
  }

}
