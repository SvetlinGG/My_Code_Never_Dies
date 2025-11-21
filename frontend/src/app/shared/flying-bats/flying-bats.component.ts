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
    { id: 1, delay: 0 },
    { id: 2, delay: 3 },
    { id: 3, delay: 6 },
    { id: 4, delay: 9 },
    { id: 5, delay: 12 }
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
}
