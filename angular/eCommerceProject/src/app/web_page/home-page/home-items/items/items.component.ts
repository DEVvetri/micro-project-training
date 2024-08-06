import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent {
  @Input() name:string="";
  @Input() price:string="";
  @Input() category:string="";
  @Input() image:string="";

}
