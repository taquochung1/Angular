import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';

import { FormsModule, NgModel } from '@angular/forms';
import { IProduct } from '../../../../entities/Product';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from '../../../../services/product.service';
import {Message} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, CommonModule, FormsModule, RouterOutlet, MessagesModule,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ProductListComponent {
  messages: Message[]=[];

  products: IProduct[] = [
  ]

  productService = inject(ProductService);
  ngOnInit() {
    this.productService.getAllProduct().subscribe({
      next: (products) => {

        this.products = products;
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
  handleDelete(id: string) {
    if (window.confirm('Ban co chac chan khong?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products.filter((product) => product.id !== id);
          // this.messages = [
          //   {
          //     severity:'success',
          //     summary:'Thành công',
          //     detail:'Xóa sản phẩm thành công',

          //   },
          // ];
          // setTimeout(() => {
          //   this.messages = []
          // }, 1000);
          window.confirm("Xoa thanh cong")
        },
        error: (error) => {
          console.error(error.message);
        },
      });
    }
  }
}
// ngDoCheck() {
//   console.log(this.products);

// }



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

