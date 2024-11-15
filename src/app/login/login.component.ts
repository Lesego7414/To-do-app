import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.http.get<any[]>('http://localhost:3000/users').subscribe((users) => {
      const user = users.find((u) => u.email === this.email && u.password === this.password);
      if (user) {
        localStorage.setItem('authToken', user.id);
        this.router.navigate(['/todo-list']);
      } else {
        alert('Invalid credentials!');
      }
    });
  }
}
