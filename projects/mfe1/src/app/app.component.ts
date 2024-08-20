import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { flightComponent } from './flight/flight.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, flightComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mfe1';
}
