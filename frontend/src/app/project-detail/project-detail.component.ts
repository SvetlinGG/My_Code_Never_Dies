import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  
  projects: any = {
    'weather-app': {
      name: 'Weather App',
      description: 'A haunting weather application that predicts storms and darkness',
      tech: ['Angular', 'TypeScript', 'Weather API'],
      year: '2023'
    },
    'ai-health-assistant': {
      name: 'AI Health Assistant',
      description: 'An AI that diagnoses the living... and the dead',
      tech: ['Python', 'TensorFlow', 'Flask'],
      year: '2023'
    },
    'js-quiz': {
      name: 'JS Quiz',
      description: 'Test your JavaScript knowledge... if you dare',
      tech: ['JavaScript', 'HTML', 'CSS'],
      year: '2022'
    },
    'movie-library': {
      name: 'Movie Library',
      description: 'A collection of horror films and forgotten classics',
      tech: ['React', 'Node.js', 'MongoDB'],
      year: '2023'
    },
    'face-off': {
      name: 'Face Off',
      description: 'Face recognition that sees beyond the living',
      tech: ['Python', 'OpenCV', 'Face Recognition'],
      year: '2022'
    },
    'echo-persona': {
      name: 'Echo Persona',
      description: 'An AI that echoes your darkest thoughts',
      tech: ['Node.js', 'NLP', 'Express'],
      year: '2023'
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.project = this.projects[slug];
      
      if (!this.project) {
        this.router.navigate(['/']);
      }
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
