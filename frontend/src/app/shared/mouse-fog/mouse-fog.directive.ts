import { Directive, HostListener, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appMouseFog]',
  standalone: true
})
export class MouseFogDirective implements OnInit {
  private smokeTrail: HTMLElement[] = [];
  private maxSmoke = 15;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Only on desktop (screen width > 768px)
    if (window.innerWidth > 768) {
      this.createSmoke(event.clientX, event.clientY);
    }
  }

  private createSmoke(x: number, y: number) {
    const smoke = this.renderer.createElement('div');
    
    // Random size for variation
    const size = Math.random() * 80 + 60;
    
    // Smoke styles
    this.renderer.setStyle(smoke, 'position', 'fixed');
    this.renderer.setStyle(smoke, 'left', `${x}px`);
    this.renderer.setStyle(smoke, 'top', `${y}px`);
    this.renderer.setStyle(smoke, 'width', `${size}px`);
    this.renderer.setStyle(smoke, 'height', `${size}px`);
    this.renderer.setStyle(smoke, 'border-radius', '50%');
    this.renderer.setStyle(smoke, 'pointer-events', 'none');
    this.renderer.setStyle(smoke, 'z-index', '9997');
    this.renderer.setStyle(smoke, 'transform', 'translate(-50%, -50%)');
    this.renderer.setStyle(smoke, 'filter', 'blur(25px)');
    this.renderer.setStyle(smoke, 'mix-blend-mode', 'screen');
    
    // Dark smoke with red tint
    const opacity = Math.random() * 0.3 + 0.2;
    this.renderer.setStyle(smoke, 'background', `radial-gradient(circle, rgba(60, 60, 60, ${opacity}) 0%, rgba(80, 40, 40, ${opacity * 0.7}) 30%, rgba(40, 40, 40, ${opacity * 0.4}) 60%, transparent 100%)`);
    
    // Animation
    this.renderer.setStyle(smoke, 'animation', 'smokeRise 2s ease-out forwards');
    
    this.renderer.appendChild(this.document.body, smoke);
    this.smokeTrail.push(smoke);
    
    // Remove old smoke
    if (this.smokeTrail.length > this.maxSmoke) {
      const oldSmoke = this.smokeTrail.shift();
      if (oldSmoke) {
        this.renderer.removeChild(this.document.body, oldSmoke);
      }
    }
    
    // Auto remove after animation
    setTimeout(() => {
      if (smoke.parentNode) {
        this.renderer.removeChild(this.document.body, smoke);
        const index = this.smokeTrail.indexOf(smoke);
        if (index > -1) {
          this.smokeTrail.splice(index, 1);
        }
      }
    }, 2000);
  }

  ngOnDestroy() {
    this.smokeTrail.forEach(smoke => {
      if (smoke.parentNode) {
        this.renderer.removeChild(this.document.body, smoke);
      }
    });
    this.smokeTrail = [];
  }
}
