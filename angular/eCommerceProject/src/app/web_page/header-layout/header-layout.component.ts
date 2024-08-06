import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './header-layout.component.html',
  styleUrl: './header-layout.component.css'
})
export class HeaderLayoutComponent {
  constructor(private router:Router){

  }

  isHomeActive():boolean{
    return this.router.isActive('/header/(outlet-home:home)',false);
  }
  isCartActive():boolean{
    return this.router.isActive('/header/(outlet-home:cart)',false);
  }
  isProductsActive():boolean{
    return this.router.isActive('/header/(outlet-home:products)',false);
  }
  isAddProductsActive():boolean{
    return this.router.isActive('/header/(outlet-home:addProduct)',false);
  }
  isAboutActive():boolean{
    return this.router.isActive('/header/(outlet-home:about)',false);
  }
}
