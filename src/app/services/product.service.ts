import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AddProductForm, IProduct } from '../entities/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  http = inject(HttpClient);
  apiUrl = "http://localhost:3000/products";

  constructor() { }
  getAllProduct() {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getProductDetail(id: string) {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

  createProduct(data: AddProductForm) {
    return this.http.post(this.apiUrl, data);
  }

  updateProduct(id: string, data: AddProductForm) {
    return this.http.put(`${this.apiUrl}/${id}`, data)
  }

}
