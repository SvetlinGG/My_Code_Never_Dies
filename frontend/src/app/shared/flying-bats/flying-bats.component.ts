import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flying-bats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flying-bats.component.html',
  styleUrl: './flying-bats.component.css'
})
export class FlyingBatsComponent {
  bats = [
    { id: 1, delay: 0, type: 'across' },
    { id: 2, delay: 3, type: 'attack' },
    { id: 3, delay: 6, type: 'across' },
    { id: 4, delay: 9, type: 'attack' },
    { id: 5, delay: 12, type: 'across' },
    { id: 6, delay: 15, type: 'attack' },
    { id: 7, delay: 18, type: 'across' }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
}
