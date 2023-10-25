import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-animated-number',
  template: `<span class="text-5xl font-bold {{color}}">{{currentValue | number:'1.0-0'}}</span>
  `
})
export class AnimatedNumberComponent implements OnInit {
  @Input() maxValue: number = 0;
  @Input() duration: number = 2000;
  @Input() color: string = ''
  currentValue: number = 0;
  intervalId: any;
  animationStarted: boolean = false;
  constructor(private cdRef: ChangeDetectorRef, public elRef: ElementRef) { }


  ngOnInit(): void {
    
  }

  animateNumber() {
    if (this.animationStarted) {
      return;  // Si ya se inició, simplemente regresamos.
    }

    this.animationStarted = true;

    const startTime = performance.now();
    const updateValue = (timestamp: number) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      this.currentValue = Math.floor(progress * this.maxValue);
      this.cdRef.detectChanges();

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    requestAnimationFrame(updateValue);
  }
  resetNumber() {
    this.currentValue = 0;
    this.animationStarted = false;
}


}
