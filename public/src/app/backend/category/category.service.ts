import { Category } from './../../models/category';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  createCategory(category: Category) {

  }

  getCategory(categoryId: number) {

  }

  updateCategory(categoryId: number) {

  }

  deleteCategory(categoryId: number) {
    
  }
}
