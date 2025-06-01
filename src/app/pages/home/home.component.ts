import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  title = signal('Codehexo');
  description =
    'A simple Angular application to demonstrate component structure and routing.';
}
