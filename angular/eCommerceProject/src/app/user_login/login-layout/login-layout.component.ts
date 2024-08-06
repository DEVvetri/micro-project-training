import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css'
})
export class LoginLayoutComponent {
  constructor(private router: Router) {}

  isLoginActive(): boolean {
    return this.router.isActive('/login-layout/(outlet-login:login)',false);
  }

  isRegisterActive(): boolean {
    return this.router.isActive('/login-layout/(outlet-login:register)', false);
  }
}
