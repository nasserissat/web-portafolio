import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-carousel',
  template: `
    <div class="relative cursor-pointer"  *ngIf="slides">
      <div class="flex overflow-hidden">
        <div class="flex transition-transform ease-in-out duration-300" [style.transform]="'translateX(-' + currentSlideIndex * 100 + '%)'">
          <ng-content></ng-content>
        </div>
      </div>
      <div class="absolute inset-0 hidden lg:flex items-center justify-between px-4">
        <button class="carousel-indicators" (click)="goToPreviousSlide()">
          &#8592;
        </button>
        <button class="carousel-indicators" (click)="goToNextSlide()">
          &#8594;
        </button>
      </div>
      <div class="absolute bottom-0 left-0 right-0 flex justify-center p-4 z-20">
        <button *ngFor="let slide of slides; let i = index" 
                (click)="goToSlide(i)" 
                class="h-2 w-2 rounded-full bg-gray-400 mx-2 p-2.5" 
                [class.bg-primary]="i === currentSlideIndex">
        </button>
      </div>
    </div>
  `,
  styles: []
})
export class CarouselComponent {
  @Input() slides: any[] | undefined;
  currentSlideIndex = 0;

  goToSlide(slideIndex: number) {
    this.currentSlideIndex = slideIndex;
  }

  goToPreviousSlide() {
    if(this.slides != undefined){
      this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
    }
  }

  goToNextSlide() {
    if(this.slides != undefined){
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }
  }
  
}
