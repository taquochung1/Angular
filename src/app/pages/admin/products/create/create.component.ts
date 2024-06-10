import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../../services/product.service';
import { Router } from '@angular/router';
import { AddProductForm } from '../../../../entities/Product';
import { CommonModule } from '@angular/common';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateProductComponent {
  productService = inject(ProductService);
  router = inject(Router);
  messages: Message[] = [];

  addProductForm = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    imageUrl: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    productCode: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  handleSubmit() {
    console.log(this.addProductForm);
    if (this.addProductForm) {
      const formValue: AddProductForm = this.addProductForm.value as AddProductForm;
      console.log(formValue);

      this.productService.createProduct(formValue).subscribe({

        next: () => {
          window.confirm("Thêm sản phẩm thành công")
          this.router.navigate(['admin/products/list'])
        },
        error: (error) => {
          console.log(error.message);
        }
      });
    } else {
      console.log("thêm thất bại");
    }
  }
}
