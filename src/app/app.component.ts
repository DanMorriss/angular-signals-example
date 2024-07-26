import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, computed } from '@angular/core';
import { single } from 'rxjs';
import { sign } from 'crypto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-signals-example';

  price = 19;

  quantity = signal(10);

  // computed cannot be set directly
  totalPrice = computed(() => this.price * this.quantity());

  changeQuantity(event: Event) {
    this.quantity.set((event.target as HTMLInputElement).valueAsNumber);
  }
  
}
