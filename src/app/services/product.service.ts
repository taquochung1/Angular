import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../entities/Product';

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

  getProductDetail(id: number) {
    return this.http.get<IProduct>(`${this.apiUrl}/${id}`);
  }

}
