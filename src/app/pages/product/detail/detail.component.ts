import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../entities/Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, FormsModule], // Thêm các module cần thiết vào đây
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  product!: IProduct | undefined;
  router = inject(Router)

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const productId = params['id'];
      if (productId) {
        this.productService.getProductDetail(productId).subscribe({
          next: (data) => {
            this.product = data;
            console.log(data);
          },
          error: (error) => {
            this.router.navigate(['admin/notfound'])
          },
        });
      } else {
        this.router.navigate(['admin/notfound'])
      }
    });
  }
}
