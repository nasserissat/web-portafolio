import { Component, Input } from '@angular/core';
import { Slider } from '../models/models';

@Component({
  selector: 'app-carousel',
  template: `
  <div class="relative" *ngIf="slides">
        <div class="flex overflow-hidden">
          <div class="flex transition-transform ease-in-out duration-300" [style.transform]="'translateX(-' + currentSlideIndex * 100 + '%)'">
            <div class="flex-none w-full text-center" *ngFor="let slide of slides">
                <i class="{{slide.icon}} text-white text-7xl xl:text-9xl max-h-44 pt-8"></i>
                  <div class="text-2xl py-8">{{ slide.title }}</div>
                  <div class="md:text-lg px-3 mb-16">{{ slide.description }}</div>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 hidden md:flex items-center justify-between px-4">
          <button class="carousel-indicators" (click)="goToPreviousSlide()">
            &#8592;
          </button>
          <button class="carousel-indicators" (click)="goToNextSlide()">
            &#8594;
          </button>
        </div>
        <div class="absolute bottom-0 left-0 right-0 flex justify-center p-4 z-20">
          <button (click)="goToSlide(i)" *ngFor="let slide of slides; let i = index" class="h-2 w-2 rounded-full bg-gray-400 mx-2 p-2.5" [class.bg-blue-500]="i === currentSlideIndex">
          </button>
        </div>
      </div>
  `,
  styles: []
})
export class CarouselComponent {
    @Input() slides: Slider[] | undefined;
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