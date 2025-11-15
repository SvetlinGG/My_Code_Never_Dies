import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  projects = [
    { name: 'Weather App', slug: 'weather-app' },
    { name: 'AI Health Assistant', slug: 'ai-health-assistant' },
    { name: 'JS Quiz', slug: 'js-quiz' },
    { name: 'Movie Library', slug: 'movie-library' },
    { name: 'Face Off', slug: 'face-off' },
    { name: 'Echo Persona', slug: 'echo-persona' }
  ];
}
