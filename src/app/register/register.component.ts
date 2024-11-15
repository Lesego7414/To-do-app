import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    const user = { name: this.name, email: this.email, password: this.password };
    this.http.post('http://localhost:3000/users', user).subscribe(() => {
      alert('Registration successful!');
      this.router.navigate(['/login']);
    });
  }
}
