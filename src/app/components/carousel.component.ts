import { Component, Input } from '@angular/core';
import { Slider } from '../models/models';

@Component({
  selector: 'app-carousel',
  template: `
  <div class="relative" *ngIf="slides">
        <div class="flex overflow-hidden">
          <div class="flex transition-transform ease-in-out duration-300" [style.transform]="'translateX(-' + currentSlideIndex * 100 + '%)'">
            <div class="flex-none w-full" *ngFor="let slide of slides">
              <div class="text-center xl:p-10 realtive">
              <i class="{{slide.icon}} text-white text-7xl xl:text-9xl max-h-44 pt-8"></i>
                <div class="text-2xl py-8">{{ slide.title }}</div>
                <img *ngIf="slide.img" [src]="slide.img" class="text-2xl py-8">
                <div class="md:text-lg pb-9">{{ slide.description }}</div>
              </div>
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
        <div class="absolute bottom-0 left-0 right-0 flex justify-center p-4 mt-4">
          <button *ngFor="let slide of slides; let i = index" class="h-2 w-2 rounded-full bg-gray-400 mx-2 p-1.5" [class.bg-gray-200]="i === currentSlideIndex" (click)="goToSlide(i)">
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