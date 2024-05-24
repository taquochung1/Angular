import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IProduct } from '../../../entities/Product';
import { Message } from 'primeng/api';
import { ProductService } from '../../../services/product.service';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  product: any;
  messages: Message[] = [];

  products: IProduct[] = [
  ]

  productService = inject(ProductService);
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe({
      next: (products) => {

        this.products = products;
        console.log(this.products);

      },
      error: (error) => {
        this.messages = [
          {
            severity: 'error',
            summary: `${error.message}`,
            detail: '',
          },
        ];
      },
    })
  }


  // listProduct: IProduct[] = [];
  // constructor() { }
  // ngOnInit(): void {
  //   this.listProduct = this.products;
  // }
  // filterValue: string = '';
  // filter() {
  //   this.products = this.listProduct.filter((p) =>
  //     p.productName.includes(this.filterValue)
  //   );
  // }
}
