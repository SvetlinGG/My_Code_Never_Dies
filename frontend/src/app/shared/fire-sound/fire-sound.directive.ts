import { Directive, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFireSound]',
  standalone: true
})
export class FireSoundDirective implements OnInit, OnDestroy {
  private audio: HTMLAudioElement | null = null;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    // Create audio element with fire crackling sound
    this.audio = new Audio();
    // Using a fire sound from a free sound library
    this.audio.src = 'https://assets.mixkit.co/active_storage/sfx/2355/2355-preview.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.3;
    this.audio.load();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.audio && window.innerWidth > 768) {
      this.audio.currentTime = 0;
      this.audio.play().catch(err => {
        console.log('Audio play failed:', err);
      });
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
