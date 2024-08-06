import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product, ProductServiceService } from '../../product-service.service';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink,ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  allProducts:Product[]=[];
  constructor(private service:ProductServiceService){
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getProducts().subscribe(data=>{this.allProducts=data});

  }

}
