import { Component } from '@angular/core';
import { HomePosterComponent } from './home-poster/home-poster.component';
import { HomeFoorterComponent } from './home-foorter/home-foorter.component';
import { HomeItemsComponent } from './home-items/home-items.component';
import { HomeMenWomenPosterComponent } from './home-men-women-poster/home-men-women-poster.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomePosterComponent,HomeFoorterComponent,HomeItemsComponent,HomeMenWomenPosterComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
}
