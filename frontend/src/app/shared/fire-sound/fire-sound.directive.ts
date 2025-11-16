import { Directive, ElementRef, HostListener, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appFireSound]',
  standalone: true
})
export class FireSoundDirective implements OnInit, OnDestroy {
  private audio: HTMLAudioElement | null = null;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    // Only create audio in browser environment
    if (this.isBrowser && typeof Audio !== 'undefined') {
      this.audio = new Audio();
      // Using a fire sound - trying multiple sources for better compatibility
      this.audio.src = 'https://cdn.pixabay.com/audio/2022/03/10/audio_4a468b9c38.mp3';
      this.audio.loop = true;
      this.audio.volume = 0.7;
      this.audio.preload = 'auto';
      this.audio.load();
    }
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (this.isBrowser && this.audio && window.innerWidth > 768) {
      this.audio.currentTime = 0;
      this.audio.volume = 0.7;
      
      const playPromise = this.audio.play();
      
      if (playPromise !== undefined) {
        playPromise.then(() => {
          console.log('Fire sound playing');
        }).catch(err => {
          console.log('Audio play failed - user interaction may be required:', err);
          // Try alternative sound source
          if (this.audio) {
            this.audio.src = 'https://www.soundjay.com/nature/sounds/fire-1.mp3';
            this.audio.load();
            this.audio.play().catch(e => console.log('Alternative source also failed:', e));
          }
        });
      }
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.isBrowser && this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }

  ngOnDestroy() {
    if (this.isBrowser && this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
