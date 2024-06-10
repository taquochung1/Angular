import { Component, inject } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { AddProductForm } from '../../../../entities/Product';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule, ReactiveFormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent {
  productService = inject(ProductService);
  route = inject(ActivatedRoute);
  productId!: string;
  router = inject(Router);

  addProductForm: FormGroup = new FormGroup({
    productName: new FormControl('', [Validators.required, Validators.minLength(6)]),
    imageUrl: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    releaseDate: new FormControl('', [Validators.required]),
    productCode: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.productId);
      if (this.productId) {
        this.productService.getProductDetail(this.productId).subscribe({
          next: (data: any) => {
            // window.confirm("Cập nhật thành công")
            this.addProductForm.patchValue(data);
          },
          error: (error: any) => {
            console.log(error);

          }
        })
      }


    })
  }
  handleSubmit() {
    console.log(this.addProductForm);
    if (this.addProductForm) {
      const formValue: AddProductForm = this.addProductForm.value as AddProductForm;
      console.log(formValue);

      this.productService.updateProduct(this.productId, formValue).subscribe({

        next: () => {
          window.confirm("Cập nhật sản phẩm thành công")
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
