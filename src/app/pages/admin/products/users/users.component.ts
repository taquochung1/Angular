import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { User } from '../../../../entities/Users';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  a = inject(AuthService);
  users: User[] = [];
  ngOnInit() {
    this.a.getAllUser().subscribe({
      next: (data) => {
        this.users = data;
        console.log(this.users);
        
      },
      error: (error) => {
        console.log(error);

      }
    })
  }
}
