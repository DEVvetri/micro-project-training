import { Component } from '@angular/core';
import { ItemsComponent } from './items/items.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-items',
  standalone: true,
  imports: [ItemsComponent,FormsModule,CommonModule],
  templateUrl: './home-items.component.html',
  styleUrl: './home-items.component.css'
})
export class HomeItemsComponent {
  templist=[
    {
      name:"Unicon",
      category:"Laptop",
      price:"48,990",
      image:"https://m.media-amazon.com/images/I/51jKYfuLy1L._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      name:"Cards play",
      category:"Laptop",
      price:"48,990",
      image:"https://m.media-amazon.com/images/I/51tmWG7u5cL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      name:"Dog toy",
      category:"Laptop",
      price:"48,990",
      image:"https://m.media-amazon.com/images/I/518GQzW5zEL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
      name:"Dog toy",
      category:"Laptop",
      price:"48,990",
      image:"https://m.media-amazon.com/images/I/61uvbvdkWRL._AC_UL480_FMwebp_QL65_.jpg"
    }
  ]
}
