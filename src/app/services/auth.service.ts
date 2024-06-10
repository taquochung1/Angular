import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RegisterComponent } from '../pages/register/register.component';
import { User } from '../entities/Users';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = "http://localhost:3000";
  http = inject(HttpClient)

  constructor() { }
  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  getAllUser() {
    return this.http.get<User[]>('http://localhost:3000/users')
  }
}
