import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMouseFog]',
  standalone: true
})
export class MouseFogDirective implements OnInit {
  private fogElement!: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // Create fog element
    this.fogElement = this.renderer.createElement('div');
    this.renderer.addClass(this.fogElement, 'mouse-fog');
    this.renderer.appendChild(this.el.nativeElement, this.fogElement);
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Only on desktop (screen width > 768px)
    if (window.innerWidth > 768) {
      const x = event.clientX;
      const y = event.clientY;
      
      this.renderer.setStyle(this.fogElement, 'left', `${x}px`);
      this.renderer.setStyle(this.fogElement, 'top', `${y}px`);
      this.renderer.setStyle(this.fogElement, 'opacity', '1');
    }
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.fogElement, 'opacity', '0');
  }
}
