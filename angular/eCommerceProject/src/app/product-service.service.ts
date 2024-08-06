import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Product{
  id: string;
  image:string;
  name:string;
  about:string;
  details:string;
  price:number;
  availablity:number;
  sex:string;
  offer:number;
  category:string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http:HttpClient) { }

  myapi:string="http://localhost:3000/products";
  cetegory:string[]=[
    "Select Cetagory...",
    "Shoes",
    "Electornics",
    "Laptop",
    "Mobile",
    "dress",
  ];
  sexlit:string[]=[
    "Select Sex...",
    "Men",
    "Women",
    "Unisex"
  ];
  getProducts():Observable<any>{
    return this.http.get(this.myapi)
  }

  getProduct(data:Product):Observable<any>{
    return this.http.get(`${this.myapi}/${data.id}`)
  }

  updateProduct(data:Product):Observable<any>{
    return this.http.put(`${this.myapi}/${data.id}`,data)
  }
  addProduct(data:Product):Observable<any>{
    return this.http.post(`${this.myapi}`,data)

  }
  deleteRecord(data:Product){
    return this.http.delete(this.myapi+`/${data.id}`);
  }

}
