import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  timeline = [
    {
      year: '2023',
      title: 'The Awakening',
      description: 'Began the journey into the dark arts of full-stack development, mastering Angular and Node.js in the shadows.'
    },
    {
      year: '2022',
      title: 'The Summoning',
      description: 'Conjured my first web applications, breathing life into static pages with JavaScript and CSS.'
    },
    {
      year: '2021',
      title: 'The Initiation',
      description: 'Entered the realm of programming, learning the ancient languages of Python and JavaScript.'
    },
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Discovered the mystical world of code and decided to embark on this eternal journey.'
    }
  ];
}
