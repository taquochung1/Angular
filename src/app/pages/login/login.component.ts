import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { RegisterComponent } from '../register/register.component';
import { UserToken } from '../../entities/Users';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);

  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });
  handleSubmit() {
    console.log(this.registerForm.value);
    this.authService.login(this.registerForm.value).subscribe({
      next: (data) => {
        console.log(data);
        localStorage.setItem('token',(data as {accessToken:string}).accessToken)
        window.confirm("Đăng nhập thành công");
        this.router.navigate(['/admin/products/list'])


      },
      error: (error) => {
        console.log(error);

      }
    })
  }
}
