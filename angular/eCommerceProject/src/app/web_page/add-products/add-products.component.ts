import { Component, OnInit } from '@angular/core';
import { Product, ProductServiceService } from '../../product-service.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent implements OnInit {
  allProducts: Product[]=[];
  cetegoryList:string[]=[];
  sexList:string[]=[];
  constructor(private service:ProductServiceService,private router:Router){

  }
  ngOnInit(): void {
    this.service.getProducts().subscribe(data=>this.allProducts=data);
    this.cetegoryList=this.service.cetegory;
    this.sexList=this.service.sexlit;
  }
  newProduct:Product={
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
  }
  isready:boolean=false;

  check(){
    if (this.newProduct.offer>100 ||this.newProduct.offer<0) {
      this.newProduct.offer=0;
      alert("offer will be in rang of 1 - 100");
    }
  }

  addProduct(){
    if (this.newProduct.name===""||this.newProduct.about===""||this.newProduct.details===""||this.newProduct.category===""||this.newProduct.price===0||this.newProduct.availablity===0||this.newProduct.offer===0||this.newProduct.image==="") {
      alert("enter all details");
    } else if(this.isready){
      this.newProduct.id=String(this.allProducts.length);
      this.service.addProduct(this.newProduct).subscribe()
      this.clear();
      }else {
        alert("product is not ready to publish ")
      }
  }

  clear(){
    this.newProduct={
      id:"",
      image:"",
      name:"",
      details:"",
    category:"",
    sex:"",
      about:"",
      price:0,
      availablity:0,
      offer:0
    }
  }
}
