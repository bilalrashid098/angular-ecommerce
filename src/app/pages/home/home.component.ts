import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = signal('Codehexo');
  description =
    'A simple Angular application to demonstrate component structure and routing.';
  inputOnChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }
}
