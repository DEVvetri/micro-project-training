import { Component, Input } from '@angular/core';
import { Product } from '../../../product-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  isset:boolean=false;
 @Input() product:Product={
  id:"",
  image:"",
  name:"",
  about:"",
  details:"",
  category:"",
  sex:"",
  price:0,
  availablity:0,
  offer:0
 };
 toggle(){
  this.isset=!this.isset;
 }
}
