import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  allProducts:Product[] = [
    {id: 1, name: 'Milk', price: 1.45},
    {id: 2, name: 'Bread', price: 3.90},
    {id: 3, name: 'Butter', price: 2.25}
  ]
  
}
